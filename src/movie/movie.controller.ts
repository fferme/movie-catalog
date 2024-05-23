import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { CreateMovieDTO } from "./dto/create-movie.dto";
import { MovieDTO } from "./dto/movie-dto";
import { UpdateMovieDTO } from "./dto/update-movie.dto";
import RedisService from "./lib/redis-service";

const radisService = RedisService.getInstance();
const redisClient = radisService.getClient();
const DEFAULT_EXPIRATION = RedisService.getDefaultExpiration();

@Controller("movies")
export class MovieController {
   constructor(private readonly movieService: MovieService) {
   }

   @Post()
   public async create(@Body() createMovieDto: CreateMovieDTO): Promise<CreateMovieDTO> {
      return this.movieService.create(createMovieDto);
   }

   @Get()
   public async findAll(): Promise<MovieDTO[]> {
      const cachedMovies = await redisClient.get("movies");
      if (cachedMovies !== null) {
         return JSON.parse(cachedMovies);
      }

      const movies = await this.movieService.findAll();
      await redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));

      return movies;
   }

   @Get(":id")
   public async findById(@Param("id") id: string): Promise<MovieDTO> {
      const cachedMovie = await redisClient.get(`movie:${id}`);
      if (cachedMovie !== null) {
         return JSON.parse(cachedMovie);
      }

      const movie = await this.movieService.findById(id);
      await redisClient.setex(`movie:${id}`, DEFAULT_EXPIRATION, JSON.stringify(movie));

      return movie;
   }

   @Put(":id")
   public async update(
      @Param("id") id: string,
      @Body() updateMovieDTO: UpdateMovieDTO
   ): Promise<MovieDTO> {
      return this.movieService.update(id, updateMovieDTO);
   }

   @Delete(":id")
   @HttpCode(HttpStatus.NO_CONTENT)
   public async deleteById(@Param("id") id: string): Promise<void> {
      await this.movieService.deleteById(id);
   }

   @Delete()
   @HttpCode(HttpStatus.NO_CONTENT)
   public async deleteAll(): Promise<void> {
      await this.movieService.deleteAll();
   }
}
