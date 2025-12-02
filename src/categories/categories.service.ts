import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';
import { Injectable } from '@nestjs/common';
// import { generatedMockAsyncRequest } from 'src/utils/mock';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCategories(): Promise<CategoryDto[]> {
    // return await generatedMockAsyncRequest([
    //   { id: '550e8400-e29b-41d4-a716-446655440000', name: 'Math' },
    //   { id: '550e8400-e29b-41d4-a716-446655440001', name: 'Science' },
    //   { id: '550e8400-e29b-41d4-a716-446655440002', name: 'History' },
    //   { id: '550e8400-e29b-41d4-a716-446655440003', name: 'Language' },
    // ] as CategoryDto[]);
    return await this.prismaService.category.findMany();
  }

  async createCategory(name: string): Promise<CategoryDto> {
    return await this.prismaService.category.create({
      data: { name },
    });
  }
}
