import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VETERINARIOS } from 'src/models/models';
import { IVeterinario } from './veterinarios.interface';
import { Model } from 'mongoose';
import { VeterinarioDTO } from './dto/veterinario.dto';

@Injectable()
export class VeterinarioService {
  constructor(
    @InjectModel(VETERINARIOS.name) private readonly model: Model<IVeterinario>,
  ) {}

  async insertar(VeterinarioDTO: VeterinarioDTO): Promise<IVeterinario> {
    const newVeterinario = new this.model(VeterinarioDTO);
    return await newVeterinario.save();
  }
  async todos(): Promise<IVeterinario[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IVeterinario> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    VeterinarioDTO: VeterinarioDTO,
  ): Promise<IVeterinario> {
    return await this.model.findByIdAndUpdate(id, VeterinarioDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
