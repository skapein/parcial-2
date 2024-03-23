import mongoose from 'mongoose';
export const CitaSchema = new mongoose.Schema(
  {
    Fecha_Cita: { type: Date, required: true },
    mascota: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mascota' }],
    veterinario: [{ type: mongoose.Schema.Types.ObjectId, ref: 'veterinario' }],
  },
  {
    timestamps: true,
  },
);