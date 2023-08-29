import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/main.ts",
    output: [
      {
        name: pkg.name,
        file: pkg.main,
        format: "cjs",
      },
      {
        name: pkg.name,
        file: pkg.module,
        format: "esm",
      },
    ],
    plugins: [
      typescript({
        lib: ["es5", "es6", "dom"],
        target: "es5",
        outDir: "dist",
        declaration: true,
        declarationDir: "dist",
      }),
    ],
  },
];
