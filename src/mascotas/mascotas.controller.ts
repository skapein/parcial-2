import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { MascotaService } from './mascotas.service';
  import { MascotaDTO } from './dto/mascota.dto';
  import { ApiTags } from '@nestjs/swagger';
  @ApiTags('mascota')
  @Controller('api/v1/mascota')
  export class MascotasController {
    constructor(private readonly MascotaService: MascotaService) {}
  
    @Post()
    insertar(@Body() MascotaDTO: MascotaDTO) {
      return this.MascotaService.insertar(MascotaDTO);
    }
    @Get()
    todos() {
      return this.MascotaService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.MascotaService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() MascotaDTO: MascotaDTO) {
      return this.MascotaService.actualizar(id, MascotaDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.MascotaService.eliminar(id);
    }
  }
  