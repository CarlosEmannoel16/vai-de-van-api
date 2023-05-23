import * as Yup from 'yup';

export const createRouteYupValidation = Yup.object().shape({
    destinyId: Yup.string()
      .typeError('O Destino deve ser um String')
      .required('O Destino é oribrigatório'),
    
    km: Yup.string()
      .typeError('O Km deve ser uma string'),
    
    name: Yup.string()
      .typeError('O Nome da rota  deve ser uma string')
      .required('O Nome da rota é obrigatório'),
  
    originId: Yup.string()
      .typeError('A Cidade origem deve ser uma string')
      .required('A Cidade de origem é obrigatória'),
      
  
   
  });