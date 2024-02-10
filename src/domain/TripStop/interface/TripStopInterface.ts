import { StopInterface } from "@/domain/Stop/interface/StopInterface";

export interface TripStopInterface {
  get id(): string;
  get stopOrder(): number;
  get isFinalStop(): boolean;
  get isInitialStop(): boolean;
  set isFinalStop(value: boolean);
  set isInitialStop(value: boolean);
  get Stop(): StopInterface;
  get distanceFromLast(): number;
}
