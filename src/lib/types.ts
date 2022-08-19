export const unreachable = (obj: never): never => {
  throw Error(`Reached unreachable: ${JSON.stringify(obj)}`);
};
