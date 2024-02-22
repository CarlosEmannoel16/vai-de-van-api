import { ValidatorInterface } from '@/domain/@shared/validator/ValidatorInterface';
import { TravelInterface } from '../Interfaces/travel.interface';
import * as Yup from 'yup';

export class TravelValidator implements ValidatorInterface<TravelInterface> {
  validate(data: TravelInterface): void {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string().required(),
      arrivalDate: Yup.date().required(),
      departureDate: Yup.date().required(),
    });

    schema.validateSync(data);
  }
}
