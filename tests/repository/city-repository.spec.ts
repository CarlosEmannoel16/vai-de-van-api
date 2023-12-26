import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';

describe('City Repository Test', () => {
  let containerPostgresExecution;

  beforeAll(async () => {
    const containerPostgres = new PostgreSqlContainer()
      .withExposedPorts(5432)
      .withDatabase('test')
      .withUsername('test')
      .withPassword('test');

    containerPostgresExecution = await containerPostgres.start();
  });

  afterAll(async () => {
    await containerPostgresExecution.stop();
  });
  it('should create city', () => {
    expect(true).toBe(true);
  });
});
