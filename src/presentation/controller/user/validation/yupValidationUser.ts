import * as Yup from 'yup';

export const getUserByNameYupValidation = Yup.object().shape({
  id: Yup.string()
    .typeError('O name deve ser uma string')
    .required('O nome do usuário é obrigatório'),
});

export const getUserYupValidation = Yup.object().shape({
  id: Yup.string()
    .typeError('O id deve ser uma string')
    .required('O id do usuário é obrigatório'),
});

export const createUserYupValidation = Yup.object().shape({
  name: Yup.string()
    .typeError('O nome deve ser um String')
    .required('Nome é oribrigatório'),
  phone: Yup.string()
    .typeError('O telefone deve ser uma string')
    .required('O telefone é obrigatório')
    .min(11, 'O telefone tem que ter no mínimo 11 digitos'),

  email: Yup.string()
    .typeError('O email deve ser uma string')
    .max(50, 'O email deve ter no máximo 50 caracteres'),

  type: Yup.string()
    .typeError('O tipo de usuário deve ser uma string')
    .required('O tipo de usuário é obrigatório'),

  cpf: Yup.string()
    .typeError('O cpf deve ser uma string')
    .required('O cpf é obrigatório')
    .min(11, 'O Cpf deve possuir 11 caracteres')
    .max(11, 'O Cpf deve possuir 11 caracteres'),

  password: Yup.string()
    .typeError('A password deve ser uma string')
    .required('O password é obrigatório'),
});
