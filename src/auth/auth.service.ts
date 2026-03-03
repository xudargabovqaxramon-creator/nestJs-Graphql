import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "./entities/auth.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Auth) private authRepository: Repository<Auth>) {}

    async register(email:string, name:string, password:number): Promise<Auth> {
        const foundedUser = await this.authRepository.findOne({ where: { email } });
        if (foundedUser) throw new Error("User already exists");
        const newAuth = this.authRepository.create({ email, name, password });
        return this.authRepository.save(newAuth);
    }

    async verifyAuth(email: string, otp: string): Promise<Auth> {
        const user = await this.authRepository.findOne({ where: { email, otp } });
        if(!user) throw new NotFoundException("User not found");
        return user;
    }

    async login(email: string, password: string): Promise<Auth> {
        const user = await this.authRepository.findOne({ where: { email } });
        if(!user) throw new NotFoundException("User not found");
        return user;
    }

    async forgotPassword(email: string, newPassword: number, confirmPassword: number): Promise<void> {
        const user = await this.authRepository.findOne({ where: { email } });
        if(!user) throw new NotFoundException("User not found");
        if(newPassword !== confirmPassword) throw new Error("Passwords do not match");
        user.password = newPassword;
        await this.authRepository.save(user);
    }
}
