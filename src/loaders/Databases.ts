import { AppDataSource } from '../config/postgres';
export class DataBase {
  async startPostgres() {
    await AppDataSource.initialize();
  }

  async init() {
    await this.startPostgres();
  }
}

export default new DataBase();
