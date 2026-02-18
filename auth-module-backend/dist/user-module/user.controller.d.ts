import type { UserDTO } from 'src/user-module/dtos/UserDTO';
import { UserServices } from 'src/user-module/services/user-services/user.service';
export declare class UserController {
    userServices: UserServices;
    constructor(userServices: UserServices);
    createUser(user: UserDTO, res: any): Promise<void>;
    login(header: any, user: UserDTO, res: any): Promise<void>;
    getInfo(req: any, res: any): Promise<void>;
}
