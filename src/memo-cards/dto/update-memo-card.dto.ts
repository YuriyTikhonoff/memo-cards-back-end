import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoCardDto } from './create-memo-card.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateMemoCardDto extends PartialType(CreateMemoCardDto) {}
