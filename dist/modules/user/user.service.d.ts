import { Cache } from 'cache-manager';
import { FilterQuery, UpdateQuery } from 'mongoose';
import { LoginInput, RegisterInput } from '../../auth/dto/auth.dto';
import { PaginationInput } from '../common/dto/common.dto';
import { ConversationService } from '../conversation/conversation.service';
import { LoggerService } from '../logger/logger.service';
import { UserEmbeddedService } from '../user_embedded/user_embedded.service';
import { FilterGetAllUser, FilterGetOneUser, MySettingInput, UpdateUserInput } from './dto/create-user.dto';
import { User, UserResult } from './entities/user.entities';
import { UserHelper } from './helper/user.helper';
import { UserModelType } from './schema/user.schema';
export declare class UserService {
    private userModel;
    private userEmbeddedService;
    private loggerService;
    private conversationService;
    private userHelper;
    private cacheManager;
    constructor(userModel: UserModelType, userEmbeddedService: UserEmbeddedService, loggerService: LoggerService, conversationService: ConversationService, userHelper: UserHelper, cacheManager: Cache);
    createWithOAuth2(userGoogle: User): Promise<User>;
    changePassword(oldPassword: string, newPassword: string, user: User): Promise<boolean>;
    resetPassword(user: User, password: string): Promise<boolean>;
    findOne(filter: FilterGetOneUser): Promise<User>;
    getOne(filter: FilterGetOneUser): Promise<User | undefined>;
    getAllUser(pagination: PaginationInput, filter: FilterGetAllUser, user: User): Promise<UserResult>;
    signIn(input: LoginInput): Promise<User>;
    signInAsAdmin(email: string, password: string): Promise<User>;
    signUp(register: RegisterInput): Promise<User>;
    hashPassword(password: string): Promise<string>;
    isNotCorrectPassword(password: string, currentPassword: string): Promise<void>;
    findOneAndUpdate(filter: FilterQuery<User>, update: UpdateQuery<User>): Promise<User>;
    updateProfile(user: User, input: UpdateUserInput | MySettingInput, feature: string): Promise<boolean>;
    skipUser(user: User, user_id: string): Promise<boolean>;
    unSkipUser(user: User, user_id: string): Promise<boolean>;
    likeUser(user_id: string, user: User): Promise<boolean>;
    unlikeUser(user: User, user_id: string): Promise<boolean>;
    reportUser(reasonReport: string, descriptionReport: string, userReport: string, reportBy: User): Promise<boolean>;
    insertManyUser(): Promise<boolean>;
    getCurrentUser(user: User): Promise<User>;
}
