import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoCardDto } from './create-memo-card.dto';

export class UpdateMemoCardDto extends PartialType(CreateMemoCardDto) {}
