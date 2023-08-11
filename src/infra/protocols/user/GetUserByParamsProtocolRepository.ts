import { User } from "@prisma/client";

export interface IGetUserByParamsProtocolRepository {
    getUserByParams(
      data: IGetUserByParamsProtocolRepository.Params,
    ): Promise<User>;
  }
  
  export namespace IGetUserByParamsProtocolRepository {
    export type Params = {
      name?: string;
      email?: string;
      phone?: string;
      type?: string;
      cpf?: string;
      date_of_birth?: Date;
      cnh?: string;
    };
  }
  