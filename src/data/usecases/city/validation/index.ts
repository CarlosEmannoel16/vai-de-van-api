import * as Yup from 'yup';

export const createCitySchemaValidation = Yup.object().shape({
  coordinates: Yup.string(),
  disabled: Yup.boolean().required('Informe se a cidade está desabilitada'),
  name: Yup.string().required('Informe o nome da cidade'),
  stateId: Yup.string().required('Informe o id do estado'),
});
