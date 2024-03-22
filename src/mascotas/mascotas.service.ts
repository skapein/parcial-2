import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MASCOTAS } from 'src/models/models';
import { IMascota } from './mascotas.interface';
import { Model } from 'mongoose';
import { MascotaDTO } from './dto/mascota.dto';

@Injectable()
export class MascotaService {
  constructor(
    @InjectModel(MASCOTAS.name) private readonly model: Model<IMascota>,
  ) {}

  async insertar(MascotaDTO: MascotaDTO): Promise<IMascota> {
    const newMascota = new this.model(MascotaDTO);
    return await newMascota.save();
  }
  async todos(): Promise<IMascota[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IMascota> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    MascotaDTO: MascotaDTO,
  ): Promise<IMascota> {
    return await this.model.findByIdAndUpdate(id, MascotaDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
