const UseCase = (constructor: Function) => {
  return function () {};
  console.log(constructor());
};

export default UseCase;
