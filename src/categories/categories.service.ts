import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';
import { Injectable } from '@nestjs/common';

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
    await this.prismaService.category.delete({
      where: { id },
    });
  }
}
