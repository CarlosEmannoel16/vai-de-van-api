import { GetAllDriversController } from "@/presentation/controller/driver/GetAllDriversController";
import { makeGetAllDriversUseCase } from "../../useCases/Driver/makeGetAllDriversUseCase";

export const makeFindAllDriversController = () => {
  return new GetAllDriversController(makeGetAllDriversUseCase());
}
