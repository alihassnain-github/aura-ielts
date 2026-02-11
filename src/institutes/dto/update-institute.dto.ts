import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituteDto } from './create-institute.dto';

export class UpdateInstituteDto extends PartialType(CreateInstituteDto) {}
