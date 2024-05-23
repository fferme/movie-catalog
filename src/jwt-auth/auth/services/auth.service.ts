import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../../users/services/users.service";
import { CreateUserDTO } from "../../users/dto/create-user.dto";
import { UserDTO } from "../../users/dto/user.dto";
import { compareSync } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
   constructor(
     private usersService: UsersService,
     private jwtService: JwtService
   ) {
   }

   public async login(loginDTO: CreateUserDTO): Promise<{ accessToken: string }> {
      const user: UserDTO = await this.usersService.findByUsername(loginDTO.username);
      if (!compareSync(loginDTO.password, user.password)) {
         throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.username };
      return { accessToken: await this.jwtService.signAsync(payload) };
   }
}
