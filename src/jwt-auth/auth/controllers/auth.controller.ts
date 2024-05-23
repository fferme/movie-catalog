import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUserDTO } from "../../users/dto/create-user.dto";
import { SkipAuth } from "../constants/jwt.constants";

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {
	}

	@SkipAuth()
	@HttpCode(HttpStatus.OK)
	@Post("login")
	public async login(@Body() loginDTO: CreateUserDTO) {
		return this.authService.login(loginDTO);
	}
}
