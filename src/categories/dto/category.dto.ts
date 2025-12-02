import { IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  id!: string;

  @IsString()
  name!: string;

  @IsString()
  @IsOptional()
  parentCategoryName?: string;
}
