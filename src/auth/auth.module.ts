import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Auth } from "./entities/auth.entity";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Auth])],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
