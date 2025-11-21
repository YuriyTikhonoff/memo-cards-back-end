import { Module } from '@nestjs/common';
import { MemoCardsService } from './memo-cards.service';
import { MemoCardsController } from './memo-cards.controller';

@Module({
  controllers: [MemoCardsController],
  providers: [MemoCardsService],
})
export class MemoCardsModule {}
