import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import postcssAttributeCaseInsensitive from "postcss-attribute-case-insensitive";

// Shared plugins configuration
const sharedPlugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: "node_modules/**",
    presets: [["@babel/preset-env", {
      targets: "defaults, not ie 11",
      bugfixes: true
    }]],
    babelHelpers: "bundled",
  }),
  postcss({
    extract: true,
    modules: true,
    minimize: false,
    sourcemap: false,
    plugins: [postcssAttributeCaseInsensitive()],
  }),
];

// Base configuration
const baseConfig = {
  plugins: sharedPlugins,
};

// JavaScript configuration
const jsConfig = {
  ...baseConfig,
  input: "src/js/global.js",
  output: {
    file: "dist/js/expack.esm.js",
    format: "esm",
    name: "ExPack",
    sourcemap: false,
  },
  external: ['jquery'],
  plugins: [
    ...sharedPlugins,
    terser({
      mangle: {
        reserved: ['$', 'jquery'],
      },
      format: {
        comments: false,
      },
      compress: {
        drop_console: false, // Set to true for production
      },
    }),
  ],
};

// CSS configuration
const cssConfig = {
  ...baseConfig,
  input: "src/scss/global.scss",
  output: {
    file: "dist/css/global.css", // Explicit output for CSS
    format: "es", // CSS doesn't need module format but this prevents warnings
  },
};

export default [jsConfig, cssConfig];
