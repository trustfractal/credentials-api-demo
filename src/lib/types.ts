export const unreachable = (message?: string): never => {
  throw Error(message || "Reached unreachable");
};
