import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { VeterinarioModule } from 'src/veterinarios/veterinarios.module';
import { MascotaModule } from 'src/mascotas/mascotas.module';
//import { CitaSchema } from './citas/cita.schema';
import { CitaSchema } from './schema/cita.schema';
import { CITAS } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CITAS.name,
        useFactory: () => CitaSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    MascotaModule,
    VeterinarioModule,
  ],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}