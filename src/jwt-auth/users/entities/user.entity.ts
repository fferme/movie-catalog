import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
	@ApiProperty({ description: "ID of the user" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ApiProperty({ description: "Username of the user", maxLength: 15 })
	@IsNotEmpty({ message: "Username can't be empty" })
	@IsString()
	@Length(1, 15, { message: "Username must have between 1 and 15 characters" })
	@Column({ type: "varchar", length: 15, nullable: false, unique: true })
	username: string;

	@ApiProperty({ description: "Password of the user", maxLength: 250 })
	@IsNotEmpty({ message: "Password can't be empty" })
	@IsString()
	@Length(1, 250, { message: "Password must have between 1 and 250 characters" })
	@Column({ type: "varchar", length: 250, nullable: false })
	password: string;
}
