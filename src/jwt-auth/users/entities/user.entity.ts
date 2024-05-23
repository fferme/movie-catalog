import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString, Length } from "class-validator";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@IsNotEmpty({ message: "Username can't be empty" })
	@IsString()
	@Length(1, 15, { message: "Username must have between 1 and 40 characters" })
	@Column({ type: "varchar", length: 15, nullable: false, unique: true })
	username: string;

	@IsNotEmpty({ message: "Password can't be empty" })
	@IsString()
	@Length(1, 250, { message: "Password must have between 1 and 250 characters" })
	@Column({ type: "varchar", length: 250, nullable: false })
	password: string;
}
