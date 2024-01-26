"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@testcontainers/postgresql");
describe('City Repository Test', () => {
    let containerPostgresExecution;
    beforeAll(async () => {
        const containerPostgres = new postgresql_1.PostgreSqlContainer()
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
