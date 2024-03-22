import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PROPIETARIOS } from 'src/models/models';
import { IPropietario } from './propietarios.interface';
import { Model } from 'mongoose';
import { PropietarioDTO } from './dto/propietario.dto';

@Injectable()
export class PropietariosService {
  constructor(
    @InjectModel(PROPIETARIOS.name) private readonly model: Model<IPropietario>,
  ) {}

  async insertar(propietarioDTO: PropietarioDTO): Promise<IPropietario> {
    const newPropietario = new this.model(propietarioDTO);
    return await newPropietario.save();
  }
  async todos(): Promise<IPropietario[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IPropietario> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    propietarioDTO: PropietarioDTO,
  ): Promise<IPropietario> {
    return await this.model.findByIdAndUpdate(id, propietarioDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
