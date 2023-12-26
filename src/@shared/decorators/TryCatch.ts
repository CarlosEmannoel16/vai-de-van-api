import ControllerException from "@/presentation/helpers/ControllerException";

export function HandlerErrorController(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method
    descriptor.value = function(...args: any[]) {
        try {
            const result = originalMethod.apply(this, args);
            if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
                return result.catch((error: Error) => {
                    console.error(`Error caught by decorator in method: ${propertyKey}`);
                    console.error(error);
                });
            } else {
                return result;
            }
        } catch (error) {
          const { message, status, statusCode } =
          ControllerException.handleError(error);
        return args[1].res.status(statusCode).json({ message, status });
        }
    };

    return descriptor;
}
