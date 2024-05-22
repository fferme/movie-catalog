import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'movie_catalog',
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    MovieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
