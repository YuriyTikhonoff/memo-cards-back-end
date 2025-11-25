export const config = () => ({
  port: process.env.PORT || 3000,
  localDatabaseUrl: process.env.DATABASE_URL,
  hostedDatabaseUrl: process.env.HOSTED_DATABASE_URL,
});
