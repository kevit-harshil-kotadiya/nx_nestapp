import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const taskSchema = new mongoose.Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },

  description: {
    type: Schema.Types.String,
    required: true,
  },

});
