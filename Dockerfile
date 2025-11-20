# Base stage
FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json yarn.lock ./

FROM base AS development

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5001

ENV NODE_ENV=development

CMD ["yarn", "start:dev"]

# Build stage
FROM base AS builder

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

EXPOSE 5001

ENV NODE_ENV=production

CMD ["node", "dist/main"]
