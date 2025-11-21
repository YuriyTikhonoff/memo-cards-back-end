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

@Controller('memo-cards')
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
