import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { PropietariosService } from './propietarios.service';
  import { PropietarioDTO } from './dto/propietario.dto';
  import { ApiTags } from '@nestjs/swagger';
  @ApiTags('propietario')
  @Controller('api/v1/propietario')
  export class PropietariosController {
    constructor(private readonly propietariosService: PropietariosService) {}
  
    @Post()
    insertar(@Body() propietarioDTO: PropietarioDTO) {
      return this.propietariosService.insertar(PropietarioDTO);
    }
    @Get()
    todos() {
      return this.propietariosService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.propietariosService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() propietarioDTO: PropietarioDTO) {
      return this.propietariosService.actualizar(id, PropietarioDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.propietariosService.eliminar(id);
    }
  }
  