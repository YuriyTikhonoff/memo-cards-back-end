import { Controller, Get } from '@nestjs/common';
import { ROUTES } from 'src/constants';
import { CategoriesService } from './categories.service';

@Controller(ROUTES.CATEGORIES)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
