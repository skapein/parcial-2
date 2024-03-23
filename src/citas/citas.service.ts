import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CITAS } from 'src/models/models';
import { ICitas } from './citas.interface';
import { CitasDTO } from './dto/cita.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectModel(CITAS.name) private readonly model: Model<ICitas>,
  ) {}
  insertar(citasDTO: CitasDTO): Promise<ICitas> {
    const nuevaCita = new this.model(citasDTO);
    return nuevaCita.save();
  }
  todos(): Promise<ICitas[]> {
    return this.model.find();
  }
  uno(id: string): Promise<ICitas> {
    return this.model.findById(id);
  }
  actualizar(id: string, citasDTO: CitasDTO): Promise<ICitas> {
    return this.model.findByIdAndUpdate(id, citasDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Cita eliminada' };
  }
  async insertarMascota(
    citasId: string,
    mascotaId: string,
  ): Promise<ICitas> {
    return await this.model
      .findByIdAndUpdate(
        citasId,
        { $addToSet: { mascota: mascotaId } },
        { new: true },
      )
      .populate('mascotas');
  }
  async insertarVeterinarios(
    citasId: string,
    veterinariosId: string,
  ): Promise<ICitas> {
    return await this.model
      .findByIdAndUpdate(
        citasId,
        { $addToSet: { veterinarios: veterinariosId } },
        { new: true },
      )
      .populate('veterinarios');
  }
}