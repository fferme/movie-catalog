import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieModule } from "./movie/movie.module";
import { Movie } from "./movie/entities/movie.entity";
import { UsersModule } from "./jwt-auth/users/users.module";
import { User } from "./jwt-auth/users/entities/user.entity";
import { AuthModule } from "./jwt-auth/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./jwt-auth/auth/auth.guard";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Movie, User],
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
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
