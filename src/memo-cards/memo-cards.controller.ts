import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MemoCardsService } from './memo-cards.service';
import { CreateMemoCardDto } from './dto/create-memo-card.dto';
import { UpdateMemoCardDto } from './dto/update-memo-card.dto';
import { ROUTES } from 'src/constants';

// POST /memo-cards - Create a memo card
// GET /memo-cards - Get all memo cards (optionally filter by ?categoryId=xxx)
// GET /memo-cards/practice?limit=10 - Get cards due for practice
// GET /memo-cards/:id - Get one memo card
// PATCH /memo-cards/:id - Update a memo card
// PATCH /memo-cards/:id/practice - Update practice timestamp and level
// DELETE /memo-cards/:id - Delete a memo card

@Controller(ROUTES.MEMO_CARDS)
export class MemoCardsController {
  constructor(private readonly memoCardsService: MemoCardsService) {}

  @Post()
  create(@Body() createMemoCardDto: CreateMemoCardDto) {
    return this.memoCardsService.create(createMemoCardDto);
  }

  @Get()
  findAll(@Query('categoryId') categoryId?: string) {
    return this.memoCardsService.findAll(categoryId);
  }

  @Get('practice')
  findDueForPractice(@Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.memoCardsService.findDueForPractice(limitNum);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoCardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemoCardDto: UpdateMemoCardDto,
  ) {
    return this.memoCardsService.update(id, updateMemoCardDto);
  }

  @Patch(':id/practice')
  @HttpCode(HttpStatus.OK)
  updatePractice(@Param('id') id: string, @Body('level') level: number) {
    return this.memoCardsService.updatePracticeTimestamp(id, level);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.memoCardsService.remove(id);
  }
}
