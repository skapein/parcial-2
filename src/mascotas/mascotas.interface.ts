import { IPropietario } from "src/propietarios/propietarios.interface";

export interface IMascota extends Document {
    name: string;
    propietario: IPropietario;
    
  }
  