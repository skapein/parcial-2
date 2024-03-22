import { Module } from '@nestjs/common';
import { VeterinarioController } from './veterinarios.controller';
import { VeterinarioService } from './veterinarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VETERINARIOS } from 'src/models/models';
import { VeterinarioSchema } from './schema/veterinario.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VETERINARIOS.name,
        useFactory: () => VeterinarioSchema,
      },
    ]),
  ],
  controllers: [VeterinarioController],
  providers: [VeterinarioService],
  exports: [VeterinarioService],
})
export class VeterinarioModule {}
