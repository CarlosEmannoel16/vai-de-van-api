import { Driver } from '@/domain/Person/entity/Driver';

describe('Driver Domain', () => {
  test('Should create Driver with correct data', async () => {
    const dateOfBirth = new Date();
    const dateOfCreate = new Date();
    const dateOfUpdate = new Date();

    const driver = new Driver({
      cnh: 'cnh',
      cpf: 'cpf',
      email: 'email',
      name: 'name',
      dateOfBirth,
      dateOfCreate,
      dateOfUpdate,
      id: 'id',
      password: 'password',
      phone: 'phone',
    });

    expect(driver.cnh).toBe('cnh');
    expect(driver.cpf).toBe('cpf');
    expect(driver.email).toBe('email');

    expect(driver.name).toBe('name');
    expect(driver.dateOfBirth).toBe(dateOfBirth);
    expect(driver.dateOfCreate).toBe(dateOfCreate);
    expect(driver.dateOfUpdate).toBe(dateOfUpdate);
    expect(driver.id).toBe('id');
    expect(driver.password).toBe('password');
    expect(driver.phone).toBe('phone');
  });
});
