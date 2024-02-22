export interface PaymentCorInterface {

  successor: PaymentCorInterface;

  addSuccessor(handler: PaymentCorInterface): void;
  handler(): Promise<any>;
}
