export interface ValidateCreateDriver {
  validate(data: { cnh: string; email: string; cpf: string }): Promise<any>;
  next(data: ValidateCreateDriver): ValidateCreateDriver;
}

class CreateDriverValidator implements ValidateCreateDriver {
  async validate(data: {
    cnh: string;
    email: string;
    cpf: string;
  }): Promise<any> {
    return data;
  }

  next(data: ValidateCreateDriver): ValidateCreateDriver {
    return data;
  }
}
