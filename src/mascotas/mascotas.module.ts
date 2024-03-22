import { Module } from '@nestjs/common';
import { MascotasController } from './mascotas.controller';
import { MascotaService } from './mascotas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MASCOTAS } from 'src/models/models';
import { MascotaSchema } from './schema/mascota.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: MASCOTAS.name,
        useFactory: () => MascotaSchema,
      },
    ]),
  ],
  controllers: [MascotasController],
  providers: [MascotaService],
  exports: [MascotaService],
})
export class MascotaModule {}
