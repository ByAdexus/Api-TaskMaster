import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Date })  // Cambiado a Date
  dueDate: Date;

  @Prop({ required: true })
  priority: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true, type: Date })  // Cambiado a Date
  createdAt: Date;

  @Prop({ required: true, type: Date })  // Cambiado a Date
  updatedAt: Date;

  @Prop({ required: true })
  categoryId: string;
}

export type TaskDocument = Task & Document;
export const TaskSchema = SchemaFactory.createForClass(Task);
