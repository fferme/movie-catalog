import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Movie {
  @ApiProperty({ description: "ID of the movie" })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: "Name of the movie", maxLength: 40 })
  @IsNotEmpty({ message: "Name can't be empty" })
  @IsString()
  @Length(1, 40, { message: 'Name must have between 1 and 40 characters' })
  @Column({ type: 'varchar', length: 40, nullable: false })
  name: string;

  @ApiProperty({ description: "Synopsis of the movie", maxLength: 150 })
  @IsNotEmpty({ message: "Synopsis can't be empty" })
  @IsString()
  @Length(20, 150, {
    message: 'Synopsis must have between 20 and 150 characters',
  })
  @Column({ type: 'varchar', length: 150 })
  synopsis: string;

  @ApiProperty({ description: "Release date of the movie" })
  @Column({ type: 'timestamptz', nullable: false, update: false })
  releaseDate: Date;

  @ApiProperty({ description: "Duration of the movie in minutes" })
  @IsInt()
  @Column({ type: 'int', nullable: false, update: false })
  duration: number;

  @ApiProperty({ description: "Genres of the movie", maxLength: 50 })
  @IsNotEmpty({ message: "Genres can't be empty" })
  @IsString()
  @Length(5, 50, { message: 'Genres must have between 5 and 50 characters' })
  @Column({ type: 'varchar', length: 50, nullable: false })
  genres: string;

  @ApiProperty({ description: "Director of the movie", maxLength: 100 })
  @IsNotEmpty({ message: "Direction can't be empty" })
  @IsString()
  @Length(10, 100, {
    message: 'Direction must have between 10 and 100 characters',
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  direction: string;

  @ApiProperty({ description: "Cast of the movie", maxLength: 300 })
  @IsNotEmpty({ message: "Cast can't be empty" })
  @IsString()
  @Length(10, 300, { message: 'Cast must have between 10 and 300 characters' })
  @Column({ type: 'varchar', length: 300, nullable: false })
  cast: string;

  @ApiProperty({ description: "Language of the movie", maxLength: 40 })
  @IsNotEmpty({ message: "Language can't be empty" })
  @IsString()
  @Length(5, 40, { message: 'Language must have between 5 and 40 characters' })
  @Column({ type: 'varchar', length: 40, nullable: false, update: false })
  language: string;

  @ApiProperty({ description: "Parental rating of the movie" })
  @IsInt()
  @Column({ type: 'int', nullable: false, update: false })
  parentalRating: number;

  @ApiProperty({ description: "Trailer URL of the movie", maxLength: 150 })
  @IsNotEmpty({ message: 'Trailer URL can not be empty' })
  @IsString()
  @Length(20, 150, {
    message: 'Trailer URL must have between 20 and 150 characters',
  })
  @Column({ type: 'varchar', length: 150, nullable: false, update: false })
  trailerUrl: string;
}
