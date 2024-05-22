import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
	@PrimaryGeneratedColumn('uuid')
	@Column({ unique: true, update: false, nullable: false })
	id: string;

	@IsNotEmpty({ message: "Name can't be empty" })
	@IsString()
	@Length(1, 40, { message: "Name must have between 1 and 40 characters" })
	@Column({ type: 'varchar', length: 40, nullable: false })
	name: string;

	@IsNotEmpty({ message: "Synopsis can't be empty" })
	@IsString()
	@Length(20, 150, { message: "Synopsis must have between 20 and 150 characters" })
	@Column({ type: 'varchar', length: 150 })
	synopsis: string;

	@Column({ type: 'timestamptz', nullable: false, update: false })
	releaseDate: Date;

	@IsInt()
	@Column({ type: 'int', length: 300, nullable: false, update: false })
	duration: number;

	@IsNotEmpty({ message: "Genres can't be empty" })
	@IsString()
	@Length(5, 50, { message: "Genres must have between 5 and 50 characters" })
	@Column({ type: 'varchar', length: 50, nullable: false })
	genres: string;

	@IsNotEmpty({ message: "Direction can't be empty" })
	@IsString()
	@Length(10, 100, { message: "Direction must have between 10 and 100 characters" })
	@Column({ type: 'varchar', length: 100, nullable: false })
	direction: string;

	@IsNotEmpty({ message: "Cast can't be empty" })
	@IsString()
	@Length(10, 300, { message: "Cast must have between 10 and 300 characters" })
	@Column({ type: 'varchar', length: 300, nullable: false })
	cast: string;

	@IsNotEmpty({ message: "Language can't be empty" })
	@IsString()
	@Length(5, 40, { message: "Language must have between 5 and 40 characters" })
	@Column({ type: 'varchar', length: 40, nullable: false, update: false })
	language: string;

	@IsInt()
	@Column({ type: 'int', length: 99, nullable: false, update: false })
	parentalRating: number;

	@IsNotEmpty({ message: "Trailer URL can't be empty" })
	@IsString()
	@Length(20, 150, { message: "Trailer URL must have between 5 and 40 characters" })
	@Column({ type: 'varchar', length: 150, nullable: false, update: false })
	trailerUrl: string;
}
