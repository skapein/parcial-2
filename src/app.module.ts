import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { UsesrController } from './usesr/usesr.controller';
import { MascotasModule } from './mascotas/mascotas.module';

@Module({
  imports: [UserModule, UsersModule, MascotasModule],
  controllers: [AppController, UsesrController],
  providers: [AppService],
})
export class AppModule {}
