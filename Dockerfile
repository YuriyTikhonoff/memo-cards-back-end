# Base stage
FROM node:25-alpine AS base

WORKDIR /app

# Copy package files
COPY package*.json yarn.lock ./
# Development stage
FROM base AS development

# Install all dependencies (including devDependencies)
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Expose the port
EXPOSE 5001

# Set environment to development
ENV NODE_ENV=development

# Start the application in watch mode
CMD ["yarn", "start:dev"]

# Build stage
FROM base AS builder

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn  build

# Production stage
FROM node:25-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 5001

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/main"]
