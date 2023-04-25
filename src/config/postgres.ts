import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, State, Route, City } from '@entities/postgres';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'carlos',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User, State, Route, City],
  migrations: [],
  subscribers: [],
});
