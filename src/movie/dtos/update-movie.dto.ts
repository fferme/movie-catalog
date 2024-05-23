import { OmitType } from "@nestjs/mapped-types";
import { plainToClass } from "class-transformer";
import { Movie } from "../entities/movie.entity";
import { CreateMovieDTO } from "./create-movie.dto";

export class UpdateMovieDTO extends OmitType(CreateMovieDTO, [
  'duration',
  'language',
  'releaseDate',
  'parentalRating',
  'trailerUrl',
] as const) {
  static fromUpdateDTO(dto: UpdateMovieDTO): Movie {
    return plainToClass(Movie, dto);
  }
}
