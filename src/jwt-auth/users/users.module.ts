import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { UserControllerController } from "./controllers/user-controller.controller";

@Module({
  providers: [UsersService],
  controllers: [UserControllerController]
})
export class UsersModule {}
