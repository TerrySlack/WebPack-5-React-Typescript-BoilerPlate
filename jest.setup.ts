import "@testing-library/jest-dom";
import { mockAnimationsApi } from "jsdom-testing-mocks";

mockAnimationsApi();

global.Worker = class Worker {
  onmessage: ((this: Worker, ev: MessageEvent) => void) | null = null;
  onerror: ((this: Worker, ev: ErrorEvent) => void) | null = null;
  constructor() {}
  postMessage(): void {}
  terminate(): void {}
} as unknown as typeof Worker;

global.ResizeObserver = class ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
};
