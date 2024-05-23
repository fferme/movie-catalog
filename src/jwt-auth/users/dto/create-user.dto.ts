import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
	@ApiProperty({ description: "Username of the user", maxLength: 15 })
	username: string;

	@ApiProperty({ description: "Password of the user", maxLength: 250 })
	password: string;
}
