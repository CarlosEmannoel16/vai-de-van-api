import { IController } from '@/presentation/protocols/IController';
import { Request, Response } from 'express';

export type IRequest = {
  body: any;
  params: any;
  query: any;
  headers: any;
  files: any;
  method: string;
  url: string;
  originalUrl: string;
  path: string;
};

export const adapterRouter = (controller: IController): any => {
  return async (request: Request, response: Response) => {
    const req: IRequest = {
      body: request.body,
      params: request.params,
      query: request.query,
      headers: request.headers,
      files: request.files,
      method: request.method,
      url: request.url,
      originalUrl: request.originalUrl,
      path: request.path,
    };

    try {
      const result = await controller.handle(req);
      return response.status(result.statusCode).json(result.data);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  };
};
