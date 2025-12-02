import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDTO } from './dto/category.dto';

export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCategories(): Promise<CategoryDTO[]> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '550e8400-e29b-41d4-a716-446655440000', name: 'Math' },
          { id: '550e8400-e29b-41d4-a716-446655440001', name: 'Science' },
          { id: '550e8400-e29b-41d4-a716-446655440002', name: 'History' },
          { id: '550e8400-e29b-41d4-a716-446655440003', name: 'Language' },
        ]);
      }, 500);
    }); //this.prismaService.category.findMany();
  }
}
