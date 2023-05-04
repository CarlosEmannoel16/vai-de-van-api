import { Rule } from '@/domain/models/ruleModel';

export interface CreateUser {
  execute(data: CreateUser.Params): Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Params = {
    name: string;
    phone: string;
    email?: string;
    type: Rule;
    cpf: string;
    password: string;
    date_of_birth: Date;
  };

  export type Result = {
    id: string;
    name: string;
  };
}
