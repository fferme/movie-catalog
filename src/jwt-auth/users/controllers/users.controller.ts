import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserDTO } from "../dto/user.dto";
import {
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiNoContentResponse,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiTags,
	ApiUnauthorizedResponse
} from "@nestjs/swagger";

@Controller("users")
@ApiTags("Users")
@ApiBearerAuth()
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	@ApiOperation({ summary: "Create a user", description: "Endpoint to create a new user with valid data" })
	@ApiCreatedResponse({ description: "The user has been successfully created", type: UserDTO })
	@ApiUnauthorizedResponse({ description: "Unauthorized" })
	public async create(@Body() createUserDTO: CreateUserDTO): Promise<UserDTO> {
		return await this.usersService.create(createUserDTO);
	}

	@Get()
	@ApiOperation({ summary: "Retrieve all users", description: "Endpoint to retrieve all users" })
	@ApiOkResponse({ description: "Successfully retrieved all users", type: [UserDTO] })
	@ApiUnauthorizedResponse({ description: "Unauthorized" })
	public async findAll(): Promise<UserDTO[]> {
		return await this.usersService.findAll();
	}

	@Get("/username/:username")
	@ApiOperation({ summary: "Find a user by username", description: "Endpoint to retrieve a user by their username" })
	@ApiParam({ name: "username", description: "Username of the user to retrieve", type: String })
	@ApiOkResponse({ description: "Successfully retrieved the user", type: UserDTO })
	@ApiUnauthorizedResponse({ description: "Unauthorized" })
	public async findByUsername(@Param("username") username: string): Promise<UserDTO> {
		return this.usersService.findByUsername(username);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiOperation({ summary: "Delete a user by ID", description: "Endpoint to delete a user by their ID" })
	@ApiParam({ name: "id", description: "ID of the user to delete", type: String })
	@ApiNoContentResponse({ description: "The user has been successfully deleted" })
	@ApiUnauthorizedResponse({ description: "Unauthorized" })
	public async deleteById(@Param("id") id: string) {
		return this.usersService.deleteById(id);
	}

	@Delete()
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiOperation({ summary: "Delete all users", description: "Endpoint to delete all users" })
	@ApiNoContentResponse({ description: "All users have been successfully deleted" })
	@ApiUnauthorizedResponse({ description: "Unauthorized" })
	public async deleteAll() {
		return this.usersService.deleteAll();
	}
}
