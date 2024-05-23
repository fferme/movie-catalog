import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieDTO } from './dto/movie-dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  public async create(
    @Body() createMovieDto: CreateMovieDTO,
  ): Promise<CreateMovieDTO> {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  public async findAll(): Promise<MovieDTO[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<MovieDTO> {
    return await this.movieService.findById(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateMovieDTO: UpdateMovieDTO,
  ): Promise<MovieDTO> {
    return this.movieService.update(id, updateMovieDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteById(@Param('id') id: string): Promise<void> {
    await this.movieService.deleteById(id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteAll(): Promise<void> {
    await this.movieService.deleteAll();
  }
}
