import { Bus } from '@/domain/Vehicle/entity/Bus';

describe('Vehicle Domain', () => {
  test('Should create new Vehicle', async () => {
    const createdDate = new Date();
    const updatedDate = new Date();

    const vehicle = new Bus(
      'id',
      'bus_name',
      10,
      'white',
      'available',
      'pmh1122',
      true,
      'owner_name_any',
      createdDate,
      updatedDate,
    );

    expect(vehicle.id).toBe('id');
    expect(vehicle.name).toBe('bus_name');
    expect(vehicle.quantitySeats).toBe(10);
    expect(vehicle.color).toBe('white');
    expect(vehicle.situation).toBe('available');
    expect(vehicle.plate).toBe('pmh1122');
    expect(vehicle.withAir).toBe(true);
    expect(vehicle.ownerName).toBe('owner_name_any');
    expect(vehicle.dateOfCreate).toBe(createdDate);
    expect(vehicle.dateOfUpdate).toBe(updatedDate);

    expect(vehicle.id).not.toBe('id2');
  });

  test('Should update Vehicle', async () => {
    const createdDate = new Date();
    const updatedDate = new Date();

    const vehicle = new Bus(
      'id',
      'bus_name',
      10,
      'white',
      'available',
      'pmh1122',
      true,
      'owner_name_any',
      createdDate,
      updatedDate,
    );

    expect(vehicle.situation).toBe('available');
    vehicle.changeSituation('in_use');
    expect(vehicle.situation).toBe('in_use');

    expect(vehicle.withAir).toBe(true);
    vehicle.withAir = false;
    expect(vehicle.withAir).toBe(false);

    vehicle.changeDescription('new description');
    expect(vehicle.description).toBe('new description');
  });
});
