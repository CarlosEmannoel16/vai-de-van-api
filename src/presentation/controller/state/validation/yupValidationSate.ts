import * as Yup from 'yup';

export const createStateValidation = Yup.object().shape({
  name: Yup.string()
    .typeError('O Name deve ser uma staring')
    .required('O name do estato é obrigatório'),
  uf: Yup.string()
    .typeError('O uf deve ser uma staring')
    .required('O uf do estato é obrigatório'),
});
