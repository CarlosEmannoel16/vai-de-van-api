import * as Yup from 'yup';

export const createVehicleYupValidation = Yup.object().shape({
    amount_of_accents: Yup.number()
    .typeError(' A quantidade acentos deve ser um Number')
    .required('A quantidade de acentos é oribrigatório'),

    plate: Yup.string().typeError('A Placa deve ser uma string').required('A Placa do Veiculo é obrigatória'),

    ownerId: Yup.string()
    .typeError('O Id do dono do veiculo  deve ser uma string')
    .required('O Dono do veiculo é  obrigatório'),
});