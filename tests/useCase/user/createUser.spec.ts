// import { error } from 'console';
// import {
//   ICreateUserProtocolRepository,
//   IGetUserByCpfProtocolRepository,
//   IGetUserByNameProtocolRepository,
// } from '../../../src/data/protocols/user';
// import { CreateUserUseCase } from '../../../src/data/usecases/user/CreateUserUseCase';

// const makeCreateUserRepositoryStub = () => {
//   class CreateUserRepositoryStub implements ICreateUserProtocolRepository {
//     create(
//       data: ICreateUserProtocolRepository.Params,
//     ): Promise<ICreateUserProtocolRepository.Result> {
//       return null;
//     }
//   }
//   return new CreateUserRepositoryStub();
// };

// const makeGetUserByCpfRepositoryStub = () => {
//   class CreateUserByNameRepositoryStub
//     implements IGetUserByCpfProtocolRepository
//   {
//     getByCpf(cpf: string): Promise<IGetUserByCpfProtocolRepository.Result> {
//       return null;
//     }
//   }

//   return new CreateUserByNameRepositoryStub();
// };

// const sut = () => {
//   class CreateUserUseCase {}
// };

// type typeMakeSut = {
//   createUserRepositoryStub: ICreateUserProtocolRepository;
//   getUserByCpfRepositoryStub: IGetUserByCpfProtocolRepository;
//   sut: CreateUserUseCase;
// };

// const makeSut = (): typeMakeSut => {
//   const createUserRepositoryStub = makeCreateUserRepositoryStub();
//   const getUserByCpfRepositoryStub = makeGetUserByCpfRepositoryStub();
//   const sut = new CreateUserUseCase(
//     createUserRepositoryStub,
//     getUserByCpfRepositoryStub,
//   );

//   return {
//     createUserRepositoryStub,
//     getUserByCpfRepositoryStub,
//     sut,
//   };
// };

// describe('Create User Use Case', () => {
//   test('Espera receber um objeto correto', () => {
//     const dataMock = {
//       cpf: 'any_cpf',
//       name: 'Any_email',
//       password: 'any_password',
//       phone: 'any_phone',
//       email: 'any_email',
//       type: 'any_type',
//     };
//     const { sut, getUserByCpfRepositoryStub } = makeSut();
//     const getSpy = jest
//       .spyOn(getUserByCpfRepositoryStub, 'getByCpf')
//       .mockRejectedValueOnce(new Error('any_error'));

//     sut.execute(dataMock);
//   });
// });
