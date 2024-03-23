import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CitasService } from './citas.service';
//import { CitasService } from 'src/citas/citas.service';
import { CitasDTO } from './dto/cita.dto';
import { MascotaService } from 'src/mascotas/mascotas.service';
import { VeterinarioService } from 'src/veterinarios/veterinarios.service';

//Citas`: ID_Cita (PK), ID_Mascota (FK), ID_Veterinario (FK), Fecha_Cita

  @ApiTags('citas')
  @Controller('api/v1/citas')
  export class CitasController {
    constructor(
      private readonly citasService: CitasService,
      private readonly mascotaService: MascotaService,
      private readonly veterinarioService: VeterinarioService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea cita' })
    insertar(@Body() citasDTO: CitasDTO) {
      return this.citasService.insertar(citasDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona la fecha de la cita' })
    todos() {
      return this.citasService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.citasService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() citasDTO: CitasDTO) {
      return this.citasService.actualizar(id, citasDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.citasService.eliminar(id);
    }
    @Post(':citaId/mascota/:mascotaId')
    async agregarmascota(
      @Param('citaId') citaId: string,
      @Param('mascotaId') mascotaId: string,
    ) {
      const mascota = await this.mascotaService.uno(mascotaId);
      if (!mascota)
        throw new HttpException('Mascota not found', HttpStatus.NOT_FOUND);
      return this.citasService.insertarMascota(citaId, mascotaId);
    }
    @Post(':citaId/veterinario/:veterinarioId')
    async agregarveterinario(
      @Param('citaId') citaId: string,
      @Param('veterinarioId') veterinarioId: string,
    ) {
      const veterinario = await this.veterinarioService.uno(veterinarioId);
      if (!veterinario)
        throw new HttpException('Veterinario not found', HttpStatus.NOT_FOUND);
      return this.citasService.insertarVeterinarios(citaId, veterinarioId);
    }
  }