import { StatusStopInterface } from "./StatusStopInterface";

export interface StopInterface {
  get id(): string;
  get name(): string;
  get status(): StatusStopInterface;
  get image(): string;
  get coordinates(): string;

}
