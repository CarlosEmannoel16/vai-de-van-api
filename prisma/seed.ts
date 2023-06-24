import { City, PrismaClient } from '@prisma/client';
import axios from 'axios';
const prisma = new PrismaClient();
async function main() {
  const adm = await prisma.user.upsert({
    where: { email: 'adm@email.com' },
    update: {},
    create: {
      email: 'adm@email.com',
      name: 'Adm',
      cpf: '123456789',
      date_of_birth: new Date(),
      password: '123456',
      phone: '88999999999',
      type: 'adm',
    },
  });

  type CityAxios = { nome: string; codigo_ibge: string };

  const cities = await axios.get(
    'https://brasilapi.com.br/api/ibge/municipios/v1/CE?providers=dados-abertos-br,gov,wikipedia',
  );

  const data = cities.data.map((city: CityAxios) => {
    return {
      coordinates: '0t',
      name: city.nome ,
      stateId: '1',
    };
  }) as City[];

  const state = await prisma.state.upsert({
    where: { id: '1' },
    update: {},
    create: { name: 'Ceará', uf: 'CE', id: '1' },
  });

  const citiesResult = await prisma.city.createMany({ data: [...data], skipDuplicates: true });

  console.log({ adm, state, citiesResult });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
