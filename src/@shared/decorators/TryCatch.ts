import ControllerException from '@/presentation/helpers/ControllerException';

export function HandlerErrorController(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
) {
  const originalMethod = descriptor.value; // save a reference to the original method
  descriptor.value = async function (...args: any[]) {
    try {
      const result = await originalMethod.apply(this, args);
      return result;
    } catch (error) {
      console.log(error);
      const { message, status, statusCode } =
        ControllerException.handleError(error);
      return args[1].status(statusCode).json({ message, status });
    }
  };

  return descriptor;
}
