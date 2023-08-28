import { ValidationError } from 'yup';
import { ResponseStatus } from '../utils/response';
import { BaseError } from '@/data/errors/baseError';
import { Err } from 'joi';

export interface ControllerExceptionResult {
  statusCode: number;
  status: ResponseStatus;
  message: string;
}

class ControllerException {
  handleError(error: Error): ControllerExceptionResult {
    console.log(error);
    if (error instanceof ValidationError) {
      return {
        statusCode: 400,
        status: ResponseStatus.BAD_REQUEST,
        message: error?.errors[0],
      };
    }

    if (error instanceof BaseError) {
      const statusCode = error.getStatusCode();
      return {
        statusCode,
        status: ResponseStatus.BAD_REQUEST,
        message: error?.errors[0],
      };
    }

   
    return {
      statusCode: 500,
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'Erro no servidor',
    };
  }
}
export default new ControllerException();
