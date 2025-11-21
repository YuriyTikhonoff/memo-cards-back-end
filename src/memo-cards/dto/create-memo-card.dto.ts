import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateMemoCardDto {
  @IsString()
  title!: string;

  @IsString()
  front!: string;

  @IsString()
  back!: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  level?: number;

  @IsOptional()
  @IsBoolean()
  useReversedDefaultView?: boolean;
}
