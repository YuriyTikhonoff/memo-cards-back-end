import { Body, Controller, Get, Post } from '@nestjs/common';
import { ROUTES } from 'src/constants';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller(ROUTES.CATEGORIES)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @Post()
  createCategory(@Body() createCategoryPayload: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryPayload.name);
  }
}
