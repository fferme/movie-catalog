import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
	secret: "538faa99d4cb5c804a926afef18dea3c9d5cbaf65cd983659d46364bbcd11a64"
};

export const IS_PUBLIC_KEY = "isPublic";
export const SkipAuth = () => SetMetadata(IS_PUBLIC_KEY, true);