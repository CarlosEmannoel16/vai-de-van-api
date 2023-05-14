export interface IDeleteUserProtocolRepository {
    delete(id: string): Promise<boolean>
  }
   
