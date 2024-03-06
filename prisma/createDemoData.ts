import { Stop, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const routeMock = [
    {
      km: 60,
      name: 'Iguatu - Varzea Alegre',
      created_at: new Date(),
      disabled: false,
      id: '1',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 60,
      name: 'Varzea Alegre - Iguatu',
      created_at: new Date(),
      disabled: false,
      id: '1',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 58,
      name: 'Cedro - Iguatu',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 58,
      name: 'Iguatu - Cedro',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 48,
      name: 'Cedro - Icó',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 48,
      name: 'Icó - Cedro',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 46,
      name: 'Iguatu - Acopiara',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 46,
      name: 'Acopiara - Iguatu',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 46,
      name: 'Iguatu - Fortaleza',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
    {
      km: 46,
      name: 'Fortaleza - Iguatu',
      created_at: new Date(),
      disabled: false,
      id: '2',
      kmValue: '0.5',
      update_at: new Date(),
    },
  ];
  const state = await prisma.route.create({
    data: {
      km: 1,
      name: 'Rota 1',
      created_at: new Date(),
      disabled: false,
      id: '1',
      kmValue: '0.5',
      update_at: new Date(),
    },
  });
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
