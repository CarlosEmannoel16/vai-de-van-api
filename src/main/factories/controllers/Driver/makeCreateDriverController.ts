import { CreateDriverController } from '@/presentation/controller/driver/CreateDriverController'
import { IController } from '@/presentation/protocols/IController'
import {makeCreateDriverUseCase} from '@makeUseCases'
export const makeCreateDriverController = ():IController=> {
   return new CreateDriverController(makeCreateDriverUseCase())
}
