import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MascotaModule } from './mascotas/mascotas.module';
import { PropietariosModule } from './propietarios/propietarios.module';
//import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    UsersModule,
    MascotaModule,
    PropietariosModule
    /*VuelosModule,
    AuthModule,*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
