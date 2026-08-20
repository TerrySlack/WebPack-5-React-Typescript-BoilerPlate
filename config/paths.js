import path from "path";

export default {
  // Source files
  src: path.resolve(import.meta.dirname, '../src'),

  // Production build files
  build: path.resolve(import.meta.dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(import.meta.dirname, '../public'),
};
