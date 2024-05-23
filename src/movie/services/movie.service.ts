import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMovieDTO } from "../dtos/create-movie.dto";
import { MovieDTO } from "../dtos/movie-dto";
import { UpdateMovieDTO } from "../dtos/update-movie.dto";
import { Movie } from "../models/movie.entity";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  public async create(createMovieDTO: CreateMovieDTO): Promise<MovieDTO> {
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
