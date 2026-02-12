import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InstituteDocument = HydratedDocument<Institute>;

@Schema({ timestamps: true })
export class Institute {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  slug: string;

  @Prop({
    type: String,
    required: true,
  })
  logo: string;

  @Prop({
    type: String,
    maxlength: 20,
  })
  phone: string;
}

export const InstituteSchema = SchemaFactory.createForClass(Institute);
