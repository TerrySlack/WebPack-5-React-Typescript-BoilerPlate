// Other Node Modules
import deepEqual from "deep-equal";

export const areEqual = (objectOne: unknown, objectTwo: unknown) =>
  deepEqual(objectOne, objectTwo, { strict: true });

export const areEqualNotStrict = (objectOne: unknown, objectTwo: unknown) =>
  deepEqual(objectOne, objectTwo);
