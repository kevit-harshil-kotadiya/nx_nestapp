import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const userSchema = new mongoose.Schema({

  name: {
    type: Schema.Types.String,
    required: true,
  },

  description: {
    type: Schema.Types.String,
    required: true,
  },

});
