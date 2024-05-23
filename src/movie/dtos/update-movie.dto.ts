import { ApiProperty } from "@nestjs/swagger";

export class UpdateMovieDTO {
  @ApiProperty({ description: "Name of the movie" })
  name: string;

  @ApiProperty({ description: "Synopsis of the movie" })
  synopsis: string;

  @ApiProperty({ description: "Genres of the movie" })
  genres: string;

  @ApiProperty({ description: "Director of the movie" })
  direction: string;

  @ApiProperty({ description: "Cast of the movie" })
  cast: string;
}
