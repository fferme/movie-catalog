import { OmitType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class UpdateUserDTO extends OmitType(User, ["id", "password"] as const) {
}
