import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { MovieService } from "../services/movie.service";
import { CreateMovieDTO } from "../dtos/create-movie.dto";
import { MovieDTO } from "../dtos/movie-dto";
import { UpdateMovieDTO } from "../dtos/update-movie.dto";
import RedisService from "../../libs/redis-service";

const redisService = RedisService.getInstance();
const redisClient = redisService.getClient();
const DEFAULT_EXPIRATION = RedisService.getDefaultExpiration();

@Controller("movies")
export class MovieController {
   constructor(private readonly movieService: MovieService) {
   }

   @Post()
   public async create(@Body() createMovieDto: CreateMovieDTO): Promise<MovieDTO> {
      const createdMovie = await this.movieService.create(createMovieDto);

      redisClient.setex(`movie:${createdMovie.id}`, DEFAULT_EXPIRATION, JSON.stringify(createdMovie));

      redisClient.del("movies");
      const movies = await this.movieService.findAll();
      redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));

      return createdMovie;
   }

   @Get()
   public async findAll(): Promise<MovieDTO[]> {
      const movies = await this.movieService.findAll();

      redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));
      const cachedMovies = await redisClient.get("movies");

      return JSON.parse(cachedMovies);
   }

   @Get(":id")
   public async findById(@Param("id") id: string): Promise<MovieDTO> {
      const cachedMovie = await redisClient.get(`movie:${id}`);
      if (cachedMovie !== null) {
         return JSON.parse(cachedMovie);
      }

      const movie = await this.movieService.findById(id);
      await redisClient.setex(`movie:${id}`, DEFAULT_EXPIRATION, JSON.stringify(movie));

      redisClient.del("movies");
      const movies = await this.movieService.findAll();
      redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));

      return movie;
   }

   @Put(":id")
   public async update(@Param("id") id: string, @Body() updateMovieDTO: UpdateMovieDTO): Promise<MovieDTO> {
      const updatedMovie: MovieDTO = await this.movieService.update(id, updateMovieDTO);
      const movieKey: string = `movie:${id}`;

      const cachedMovie = await redisClient.get(movieKey);
      if (cachedMovie) {
         redisClient.set(movieKey, JSON.stringify(updatedMovie));
      }

      redisClient.del("movies");
      const movies = await this.movieService.findAll();
      redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));

      return updatedMovie;
   }

   @Delete(":id")
   @HttpCode(HttpStatus.NO_CONTENT)
   public async deleteById(@Param("id") id: string): Promise<void> {
      await this.movieService.deleteById(id);
      const movieKey: string = `movie:${id}`;

      const isCached = await redisClient.exists(movieKey);
      if (isCached) {
         redisClient.del(movieKey);
      }

      redisClient.del("movies");
      const movies = await this.movieService.findAll();
      redisClient.setex("movies", DEFAULT_EXPIRATION, JSON.stringify(movies));
   }

   @Delete()
   @HttpCode(HttpStatus.NO_CONTENT)
   public async deleteAll(): Promise<void> {
      await this.movieService.deleteAll();
      redisClient.del("movies");
   }
}
