import { InvalidGenericError } from "@/data/errors/InvalidGenericError";
import { IUpdateUser } from "@/domain/usecases/user/UpdateUser";
import { IUserProtocolRepository } from "@/infra/protocols";

import { IUpdateUserProtocolRepository } from "@/infra/protocols/user/UpdateUserProtocolRepository";

export class UpdateUserUseCase implements IUpdateUser {
    constructor(
        private readonly userRepository: IUserProtocolRepository,
    ) { }

    async execute(data: IUpdateUser.Params): Promise<IUpdateUser.Result> {
        const userExist = await this.userRepository.getById(data.id);

        if (!userExist.id) throw new InvalidGenericError('Usuário não encontrado');
        
        const {
            id,
            name,
            type,
            cpf,
            phone,
            email,
            password,
            date_of_birth,
            cnhDateOfIssue,
            cnhExpirationDate,
        } = data;

        const user = await this.userRepository.update({
            id,
            cpf,
            name,
            password,
            phone,
            type,
            email,
            date_of_birth: new Date(date_of_birth),
            cnhDateOfIssue: new Date(cnhDateOfIssue),
            cnhExpirationDate: new Date(cnhExpirationDate)
        });

        return user
    }
}