import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUserDTO } from "../../users/dto/create-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags("Authentication")
export class AuthController {
	constructor(private authService: AuthService) {
	}

	@Post("login")
	@HttpCode(HttpStatus.OK)
	@ApiOperation({
		summary: "Login",
		description: "Endpoint to authenticate user credentials and generate access token"
	})
	public async login(@Body() loginDTO: CreateUserDTO) {
		return this.authService.login(loginDTO);
	}
}
