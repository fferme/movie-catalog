import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMovieDTO {
  @ApiProperty({ description: "Name of the movie", maxLength: 40 })
  @IsNotEmpty()
  @IsString()
  @Length(1, 40, { message: 'Name must have between 1 and 40 characters' })
  name: string;

  @ApiProperty({ description: "Synopsis of the movie", maxLength: 150 })
  @IsNotEmpty()
  @IsString()
  @Length(20, 150, { message: "Synopsis must have between 20 and 150 characters" })
  synopsis: string;

  @ApiProperty({ description: "Release date of the movie" })
  @IsDateString()
  releaseDate: Date;

  @ApiProperty({ description: "Duration of the movie in minutes" })
  @IsInt()
  duration: number;

  @ApiProperty({ description: "Genres of the movie", maxLength: 50 })
  @IsNotEmpty()
  @IsString()
  @Length(5, 50, { message: 'Genres must have between 5 and 50 characters' })
  genres: string;

  @ApiProperty({ description: "Director of the movie", maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(10, 100, {
    message: 'Direction must have between 10 and 100 characters',
  })
  direction: string;

  @ApiProperty({ description: "Cast of the movie", maxLength: 300 })
  @IsNotEmpty()
  @IsString()
  @Length(10, 300, { message: 'Cast must have between 10 and 300 characters' })
  cast: string;

  @ApiProperty({ description: "Language of the movie", maxLength: 40 })
  @IsNotEmpty()
  @IsString()
  @Length(5, 40, { message: 'Language must have between 5 and 40 characters' })
  language: string;

  @ApiProperty({ description: "Parental rating of the movie" })
  @IsInt()
  parentalRating: number;

  @ApiProperty({ description: "Trailer URL of the movie", maxLength: 150 })
  @IsNotEmpty()
  @IsString()
  @Length(20, 150, { message: "Trailer URL must have between 20 and 150 characters" })
  trailerUrl: string;
}
