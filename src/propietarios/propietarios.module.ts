import { Module } from '@nestjs/common';
import { PropietariosController } from './propietarios.controller';
//import { PropietariosService } from './propietarios.interface';
import { PropietariosService } from './propietarios.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { PROPIETARIOS, USER } from 'src/models/models';
import { PropietarioSchema } from './schema/propietario.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name:   PROPIETARIOS.name,
        useFactory: () => {
          return PropietarioSchema;
        },
      },
    ]),
  ],
  controllers: [PropietariosController],
  providers: [PropietariosService],
  exports: [PropietariosService],
})
export class PropietarioModule {}