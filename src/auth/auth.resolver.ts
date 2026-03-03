import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Auth } from "./entities/auth.entity";
import { AuthService } from "./auth.service";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  hello() {
    return "GraphQL is working";
  }

  @Mutation(() => Auth)
  async register(name:string , email:string, password:number) {
    return this.authService.register(name, email, password);
  }

  @Mutation(() => Auth)
  async verifyAuth(email: string, otp: string):Promise<Auth> {
    return this.authService.verifyAuth(email, otp);
  }

  @Mutation(() => Auth)
  async login(email: string, password: string): Promise<Auth> {
    return this.authService.login(email, password);
  }

  @Mutation(() => Boolean)
  async forgotPassword(email: string, newPassword: number, confirmPassword: number): Promise<boolean> {
    await this.authService.forgotPassword(email, newPassword, confirmPassword);
    return true;
  }
}