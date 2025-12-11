import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCategories(): Promise<CategoryDto[]> {
    return await this.prismaService.category.findMany();
  }

  async createCategory(name: string): Promise<CategoryDto> {
    return await this.prismaService.category.create({
      data: { name },
    });
  }
  async deleteCategory(id: string): Promise<void> {
    try {
      await this.prismaService.category.delete({
        where: { id },
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error?.code === 'P2025'
      ) {
        throw new NotFoundException(`Category with id ${id} not found`);
      }
      throw error;
    }
  }
}
