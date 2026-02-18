import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDTO } from 'src/user-module/dtos/UserDTO';
import { User } from 'src/user-module/schemas/user-schema';
export declare class UserServices {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    createUser(userDTO: UserDTO): Promise<Object>;
    login(userDTO: UserDTO): Promise<Object>;
    getUserInfo(tokenPayload: any): Promise<User>;
}
