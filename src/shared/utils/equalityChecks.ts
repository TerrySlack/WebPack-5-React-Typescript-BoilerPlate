// Other Node Modules
import deepEqual from "deep-equal";

export const areEqual = (objectOne: any, objectTwo: any) =>
  deepEqual(objectOne, objectTwo, { strict: true });

export const areEqualNotStrict = (objectOne: any, objectTwo: any) =>
  deepEqual(objectOne, objectTwo);
