export interface IActionChainOfResponsibility<P> {
  validate(data: P): Promise<any>;
  setNext(next: IActionChainOfResponsibility<P>): any;
}
