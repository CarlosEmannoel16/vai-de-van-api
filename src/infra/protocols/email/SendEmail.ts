export interface ISendEmail {
  send(data: SendEmail.Params): Promise<void>;
}

export namespace SendEmail {
  export type Params = {
    to: string;
    subject: string;
    message: string;
  };
}
