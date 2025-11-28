/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemoCardDto } from './dto/create-memo-card.dto';
import { UpdateMemoCardDto } from './dto/update-memo-card.dto';
import { validateLimint } from '../utils/validateLimint';
@Injectable()
export class MemoCardsService {
  constructor(private prisma: PrismaService) {}

  async create(createMemoCardDto: CreateMemoCardDto) {
    return this.prisma.memoCard.create({
      data: createMemoCardDto,
      include: { category: true },
    });
  }

  async findAll(categoryId?: string) {
    try {
      return await this.prisma.memoCard.findMany({
        where: categoryId ? { categoryId } : undefined,
        include: { category: true },
        orderBy: { createdAtTimestamp: 'desc' },
      });
    } catch (error) {
      console.error('Error fetching memo cards:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    const memoCard = await this.prisma.memoCard.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!memoCard) {
      throw new NotFoundException(`Memo card with ID ${id} not found`);
    }
    return memoCard;
  }

  async update(
    id: string,
    updateMemoCardDto: UpdateMemoCardDto,
  ): Promise<unknown> {
    // TODO: implement actual update logic
    // try {
    //   return await this.prisma.memoCard.update({
    //     where: { id },
    //     data: updateMemoCardDto,
    //     include: { category: true },
    //   });
    // } catch {
    //   throw new NotFoundException(`Memo card with ID ${id} not found`);
    // }
    return Promise.resolve(null);
  }

  async remove(id: string): Promise<unknown> {
    return Promise.resolve(null);
    // TODO: implement actual deletion logic
    // try {
    //   return await this.prisma.memoCard.delete({
    //     where: { id },
    //   });
    // } catch {
    //   throw new NotFoundException(`Memo card with ID ${id} not found`);
    // }
  }

  async updatePracticeTimestamp(
    id: string,
    newLevel: number,
  ): Promise<unknown> {
    return Promise.resolve(null);
    // TODO: implement actual update practice timestamp logic
    // return this.prisma.memoCard.update({
    //   where: { id },
    //   data: {
    //     level: newLevel,
    //     lastPracticeTimestamp: new Date(),
    //   },
    // });
  }

  async findDueForPractice(limit: number = 10) {
    validateLimint(limit);
    // TODO: implement actual retrieval logic
    // const now = new Date();
    // return this.prisma.memoCard.findMany({
    //   where: {
    //     lastPracticeTimestamp: {
    //       lte: new Date(now.getTime() - 24 * 60 * 60 * 1000), // Cards not practiced in 24 hours
    //     },
    //   },
    //   include: { category: true },
    //   orderBy: [{ level: 'asc' }, { lastPracticeTimestamp: 'asc' }],
    //   take: limit,
    // });
    return Promise.resolve([]);
  }
}
