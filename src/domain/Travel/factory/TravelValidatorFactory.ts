import { TravelInterface } from "../Interfaces/travel.interface";
import { TravelValidator } from "../validator/TravelValidator";

export class TravelValidatorFactory {
  static create() {
    return new TravelValidator();
  }
}
