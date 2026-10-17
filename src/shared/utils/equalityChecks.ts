import { isEqual } from "@mainframework/is-deep-equal";

export const areEqual = (objectOne: unknown, objectTwo: unknown) =>
  isEqual(objectOne, objectTwo);
