import { OmitType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends OmitType(CreateMovieDto, ['duration', 'language', 'releaseDate', 'parentalRating', 'trailerUrl'] as const) {
}
