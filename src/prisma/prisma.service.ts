import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const databaseUrl = process.env.HOSTED_DATABASE_URL;
    if (!databaseUrl) {
      console.error('Environment variable for connection string is not set');
      throw new Error('Environment variable for connection string must be set');
    }
    const pool = new PrismaPg({
      connectionString: databaseUrl,
    });
    super({ adapter: pool });
  }
  async onModuleInit() {
    // Note: this is optional
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
