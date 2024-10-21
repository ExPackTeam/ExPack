import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import postcssAttributeCaseInsensitive from "postcss-attribute-case-insensitive";
const basePlugin = {
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
      babelHelpers: "bundled",
    }),
    postcss({
      extract: true, // Extract CSS into a separate file
      modules: true, // Set to true if you want CSS modules
      minimize: false, // Change to false to prevent minification in the main CSS
      sourceMap: true, // Generate source maps
      plugins: [
        postcssAttributeCaseInsensitive(),
      ]
    }),
  ],
};

const basejsConfig = {
  input: "src/js/global.js",
  ...basePlugin,
};

const baseCSSConfig = {
  input: "src/scss/global.scss",
  ...basePlugin,
};

const jsConfig = {
  output: {
    file: "dist/js/expack.esm.js",
    format: "esm",
    name: "ExPack",
    sourcemap: false, // Generate source maps
  },
};

const jsMiniConfig = {
  output: {
    file: "dist/js/expack.min.js",
    format: "iife",
    name: "ExPack",
    sourcemap: false,
  },
};

const cssConfig = {
  output: {
    file: "dist/css/expack.esm.css",
    format: "esm",
    name: "Expack",
    sourcemap: false,
  },
};

const cssMiniConfig = {
  output: {
    file: "dist/css/expack.min.css",
    format: "iife",
    name: "Expack",
    sourcemap: false,
  },
};
export default [
  {
    ...basejsConfig,
    ...jsConfig,
  },
  {
    ...basejsConfig,
    plugins: [
      ...basePlugin.plugins,
      terser(), // Apply Terser plugin only to the minimized output
    ],
    ...jsMiniConfig,
  },
  {
    ...baseCSSConfig,
    ...cssConfig,
  },
  {
    ...baseCSSConfig,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled",
      }),
      postcss({
        extract: true,
        modules: false,
        minimize: true, // Minify only in the minified output
        sourceMap: false, // No source maps for minified output
      }),
    ],
    ...cssMiniConfig,
  }
];
