import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserDTO } from "../dto/user.dto";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	public async create(@Body() createUserDTO: CreateUserDTO): Promise<UserDTO> {
		return await this.usersService.create(createUserDTO);
	}

	@Get()
	public async findAll(): Promise<UserDTO[]> {
		return await this.usersService.findAll();
	}

	@Get("/username/:username")
	public async findByUsername(@Param("username") username: string): Promise<UserDTO> {
		return this.usersService.findByUsername(username);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	public async deleteById(@Param("id") id: string) {
		return this.usersService.deleteById(id);
	}

	@Delete()
	@HttpCode(HttpStatus.NO_CONTENT)
	public async deleteAll() {
		return this.usersService.deleteAll();
	}
}
