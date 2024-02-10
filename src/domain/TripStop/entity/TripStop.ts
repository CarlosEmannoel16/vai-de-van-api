import { StopInterface } from '@/domain/Stop/interface/StopInterface';
import { TripStopInterface } from '../interface/TripStopInterface';

export class TripStop implements TripStopInterface {
  private _id: string;
  private _stop: StopInterface;
  private _stopOrder: number;
  private _isFinalStop: boolean = false;
  private _isInitialStop: boolean = false;
  private _distanceFromLast: number;

  constructor(id:string ,stop: StopInterface, stopOrder: number, distanceFromLast: number) {
    this._distanceFromLast = distanceFromLast;
    this._stopOrder = stopOrder;
    this._stop = stop;
    this._id = id;
  }
  get id(): string {
    throw new Error('Method not implemented.');
  }
  get distanceFromLast(): number {
    return this._distanceFromLast;
  }
  get Stop(): StopInterface {
    return this._stop;
  }
  get stopOrder(): number {
    return this._stopOrder;
  }

  get isFinalStop(): boolean {
    return this._isFinalStop;
  }

  get isInitialStop(): boolean {
    return this._isInitialStop;
  }

  set isFinalStop(value: boolean) {
    this._isFinalStop = value;
  }

  set isInitialStop(value: boolean) {
    this._isInitialStop = value;
  }
}
