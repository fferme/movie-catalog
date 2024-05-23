import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieDTO } from './dto/movie-dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  public async create(createMovieDTO: CreateMovieDTO): Promise<CreateMovieDTO> {
    return this.movieRepository.save(createMovieDTO);
  }

  public async findAll(): Promise<MovieDTO[]> {
    return this.movieRepository.find();
  }

  public async findById(id: string): Promise<MovieDTO> {
    return this.movieRepository.findOneBy({ id });
  }

  public async update(
    id: string,
    updateMovieDTO: UpdateMovieDTO,
  ): Promise<MovieDTO> {
    await this.movieRepository.update(id, updateMovieDTO);
    return this.movieRepository.findOneBy({ id });
  }

  public async deleteById(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }

  public async deleteAll(): Promise<void> {
    await this.movieRepository.clear();
  }
}
