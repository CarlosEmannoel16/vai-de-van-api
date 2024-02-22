import { StopInterface } from '@/domain/Stop/interface/StopInterface';
import { TripStopInterface } from '../interface/TripStopInterface';

export class TripStop implements TripStopInterface {

  private _stop: StopInterface;
  private _stopOrder: number;
  private _isFinalStop: boolean = false;
  private _isInitialStop: boolean = false;
  private _distanceFromLast: number;

  constructor(stop: StopInterface, stopOrder: number, distanceFromLast: number) {
    this._distanceFromLast = distanceFromLast;
    this._stopOrder = stopOrder;
    this._stop = stop;
    this.validate();
  }

  validate() {
    const errors = [];
    if(!this._stopOrder) errors.push('stopOrder is required to create a TripStop');
    if(!this._stop) errors.push('stop is required to create a TripStop');
    if(errors.length > 0) throw new Error(errors.join(', '));
  }

  get distanceFromLast(): number {
    return this._distanceFromLast;
  }
  get stop(): StopInterface {
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
