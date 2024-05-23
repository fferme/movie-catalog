import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { Movie } from './movie/entities/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Movie],
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'movie_catalog',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
