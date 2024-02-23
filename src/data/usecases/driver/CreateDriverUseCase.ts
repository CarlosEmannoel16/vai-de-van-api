import { ICreateDriverUseCase } from '@/data/protocols/usecases/driver/CreateDriver';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { IDriverProtocolRepository } from '@/infra/protocols/drivers';

export class CreateDriverUseCase implements ICreateDriverUseCase {
  constructor(private readonly driverRepository: IDriverProtocolRepository) {}
  async create(
    data: ICreateDriverUseCase.request,
  ): Promise<ICreateDriverUseCase.response> {
    const errors = [];
    const existsCpf = await this.driverRepository.getByCpf(data.cpf);
    const existsEmail = await this.driverRepository.getByEmail(data.email);
    const existsCnh = await this.driverRepository.getByCnh(data.cnh);

    if (existsCpf) errors.push('CPF já cadastrado');
    if (existsEmail) errors.push('Email já cadastrado');
    if (existsCnh) errors.push('CNH já cadastrada');
    if (errors.length > 0) throw new Error(`Erros: ` + errors.join(', '));

    const driver = PersonFactory.driver({
      cpf: data.cpf,
      email: data.email,
      name: data.name,
      password: data.password,
      phone: data.phone,
      cnh: data.cnh,
      dateOfBirth: new Date(data.date_of_birth),
    });

    const result = await this.driverRepository.create(driver);
    return {
      cpf: result.cpf,
      date_of_birth: result.dateOfBirth.toISOString(),
      email: result.email,
      id: result.id,
      name: result.name,
      password: result.password,
      phone: result.phone,
      cnh: result.cnh,
      cnhDateOfIssue: result.cnhDateOfIssue.toISOString(),
      cnhExpirationDate: result.cnhExpirationDate.toISOString(),
    };
  }
}
