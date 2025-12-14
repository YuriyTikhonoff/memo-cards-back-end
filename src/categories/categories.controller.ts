import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryPayload: CreateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(
      id,
      updateCategoryPayload.name,
    );
  }
}
