import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MemoCardsModule } from './memo-cards/memo-cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MemoCardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
