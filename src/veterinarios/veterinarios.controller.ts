import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { VeterinarioService } from './veterinarios.service';
  import { VeterinarioDTO } from './dto/veterinario.dto';
  import { ApiTags } from '@nestjs/swagger';
  @ApiTags('veterinario')
  @Controller('api/v1/mascota')
  export class VeterinarioController {
    constructor(private readonly veterinarioService: VeterinariosService) {}
  
    @Post()
    insertar(@Body() veterinarioDTO: VeterinarioDTO) {
      return this.veterinarioService.insertar(VeterinarioDTO);
    }
    @Get()
    todos() {
      return this.veterinarioService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.veterinarioService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() veterinarioDTO: VeterinarioDTO) {
      return this.veterinarioService.actualizar(id, VeterinarioDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.veterinarioService.eliminar(id);
    }
  }
  