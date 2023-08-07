import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
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
      }),
    ],
  },
  {
    input: "src/main.ts",
    output: [
      {
        file: pkg.main.replace(".js", ".d.ts"),
        format: "esm",
      },

      {
        file: pkg.module.replace(".js", ".d.ts"),
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];
