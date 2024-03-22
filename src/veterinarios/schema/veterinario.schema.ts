import mongoose from 'mongoose';

export const VeterinarioSchema = new mongoose.Schema(
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

VeterinarioSchema.index({ nombre: 1 }, { unique: true });
//PropietarioSchema.index({ username: 1 }, { unique: true });

