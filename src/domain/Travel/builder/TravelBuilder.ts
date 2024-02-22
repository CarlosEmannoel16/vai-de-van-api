import {TravelBuilderInterface} from "@domain/Travel/Interfaces/BuilderInterface";
import {TravelInterface} from "@/domain/Travel/Interfaces/travel.interface";
import {TravelFactory} from "@domain/Travel/factory/TravelFactory";

export class TravelBuilder implements TravelBuilderInterface {
  builder(): TravelInterface {
   return TravelFactory.create({}) as TravelInterface;
  }
}
