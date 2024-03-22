import mongoose from 'mongoose';

export const MascotaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  //email: { type: String, required: true },
});

MascotaSchema.index({ email: 1 }, { unique: true });
