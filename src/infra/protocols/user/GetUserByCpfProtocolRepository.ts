import { UserInterface } from "@/domain/Person/protocols/UserInterface";

export interface IGetUserByCpfProtocolRepository {
  getByCpf(cpf: string): Promise<UserInterface>;
}


