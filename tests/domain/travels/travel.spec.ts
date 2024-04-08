import { Driver } from '@/domain/Person/entity/Driver';
import { Route } from '@/domain/Route/entity/Route';
import { Travel } from '@/domain/Travel/entity/Travel';
import { Bus } from '@/domain/Vehicle/entity/Bus';

const makeRoute = () => {
  return new Route('id', 10, 'name_faker', 2);
};

const makeDriver = () => {
  return new Driver({
    cnh: 'cnh_faker',
    id: 'id',
    name: 'name_faker',
    cpf: 'cpf_faker',
    email: 'email_faker',
  });
};

const makeVehicle = () => {
  return new Bus(
    'id_1',
    'name_faker',
    40,
    'color_faker',
    'available',
    'plate_faker',
    false,
    'owner_name_faker',
    new Date(),
    new Date(),
  );
};

describe.skip('Travel Unit Test', () => {
  it('Should return date of departure in Pt-br', () => {
    const route = makeRoute();
    const driver = makeDriver();
    const vehicle = makeVehicle();

    const travel = new Travel(
      'id',
      'name',
      route,
      'ABERTA',
      driver,
      vehicle,
      new Date('2022/06/05'),
      new Date('2022/06/05'),
    );

    expect(travel.getDateOfDepartureInBr()).toBe('05/06/2022');
  });
});
