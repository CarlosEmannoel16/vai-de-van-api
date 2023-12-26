import { Driver } from '@/domain/Driver/entity/Driver';
import { Route } from '@/domain/Route/entity/Route';
import { Travel } from '@/domain/Travel/entity/Travel';
import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';

const makeRoute = () => {
  return new Route('id', 10, 'name_faker', 2);
};

const makeDriver = () => {
  return new Driver('id', 'name_faker');
};

const makeVehicle = () => {
  return new Vehicle('id', 'name_faker', 20);
}

describe('Travel Unit Test', () => {
  it('Should return date of departure in Pt-br', () => {
    const route = makeRoute()
    const driver = makeDriver()
    const vehicle = makeVehicle()

    const travel = new Travel(
      'id',
      'name',
      route,
      driver,
      vehicle,
      new Date('2022/06/05'),
      new Date('2022/06/05'),
    );

    expect(travel.getDateOfDepartureInBr()).toBe('05/06/2022');
  });
});
