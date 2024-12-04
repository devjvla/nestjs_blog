import { Body, Controller, Post } from "@nestjs/common";

/* Services */
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    /* Handle dependency injection */
    constructor(private authService: AuthService) {}

    @Post("signup")
    signup() {
        return this.authService.signup();
    }
    
    @Post("signin")
    signin() {
        return this.authService.signin();
    }
}