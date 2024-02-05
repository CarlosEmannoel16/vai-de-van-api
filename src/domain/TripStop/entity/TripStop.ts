import { StopInterface } from '@/domain/Stop/interface/StopInterface';
import { TripStopInterface } from '../interface/TripStopInterface';

export class TripStop implements TripStopInterface {
  private _stop: StopInterface[] = [];
  private _stopOrder: number;
  private _isFinalStop: boolean = false;
  private _isInitialStop: boolean = false;

  constructor(stop: StopInterface[], stopOrder: number) {
    this._stopOrder = stopOrder;
    this._stop = stop;
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
