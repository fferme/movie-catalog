import { plainToClass } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { Movie } from '../entities/movie.entity';

export class CreateMovieDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 40, { message: 'Name must have between 1 and 40 characters' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(20, 150, {
    message: 'Synopsis must have between 20 and 150 characters',
  })
  synopsis: string;

  @IsDateString()
  releaseDate: Date;

  @IsInt()
  duration: number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50, { message: 'Genres must have between 5 and 50 characters' })
  genres: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 100, {
    message: 'Direction must have between 10 and 100 characters',
  })
  direction: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 300, { message: 'Cast must have between 10 and 300 characters' })
  cast: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40, { message: 'Language must have between 5 and 40 characters' })
  language: string;

  @IsInt()
  parentalRating: number;

  @IsNotEmpty()
  @IsString()
  @Length(20, 150, {
    message: 'Trailer URL must have between 20 and 150 characters',
  })
  trailerUrl: string;

  static fromCreateDTO(dto: CreateMovieDTO): Movie {
    return plainToClass(Movie, dto);
  }
}
