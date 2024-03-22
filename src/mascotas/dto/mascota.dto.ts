import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MascotaDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo es obligatorio' })
  @IsString()
  readonly name: string;

}
