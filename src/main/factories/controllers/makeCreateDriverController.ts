import { CreateDriverController } from '@/presentation/controller/driver/CreateDriverController'
import {makeCreateDriverUseCase} from '@makeUseCases'
export const makeCreateDriverController = ()=> {
   return new CreateDriverController(makeCreateDriverUseCase())
}