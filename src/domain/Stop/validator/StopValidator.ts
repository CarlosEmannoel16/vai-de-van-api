import { ValidatorInterface } from '@/domain/@shared/validator/ValidatorInterface';
import { StopInterface } from '../interface/StopInterface';
import * as yup from 'yup';

export class StopValidator implements ValidatorInterface<StopInterface> {
  validate(data: StopInterface): void {
    yup
      .object()
      .shape({
        id: yup.string().required(),
        name: yup.string().required(),
      })
      .validate(data);
  }
}
