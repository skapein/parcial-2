import mongoose from 'mongoose';

export const PropietarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    //email: { type: String, required: true },
    //password: { type: String, required: true },
    //username: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

//PropietarioSchema.index({ email: 1 }, { unique: true });
//PropietarioSchema.index({ username: 1 }, { unique: true });

