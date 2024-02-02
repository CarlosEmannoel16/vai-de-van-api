import PersonInterface from "./PersonInterface";

export interface CustomerInterface extends PersonInterface {
  get phone(): string;
  get secondaryPhone(): string;
}
