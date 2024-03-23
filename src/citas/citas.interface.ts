import { IVeterinario } from 'src/veterinarios/veterinarios.interface';
import { IMascota } from 'src/mascotas/mascotas.interface';

export interface ICitas extends Document {
  Fecha_Cita: Date;
  mascotas : IMascota[];
  veterinario : IVeterinario[];
}