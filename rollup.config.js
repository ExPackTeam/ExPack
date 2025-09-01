import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import postcssAttributeCaseInsensitive from "postcss-attribute-case-insensitive";

// Shared plugins configuration
const SharedPlugins = [
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

const MinizedSharedPlugins = [
    resolve(),
    commonjs(),
    babel({
        exlude: "node_modules/**",
        presets: [["@babel/present-env", {
            targets: "defaults, not ie 11",
            bugfixes: true
        }]],
        babelHelpers: "bundled"
    }),
    postcss({
        extract: true,
        modules: true,
        minized: true,
        sourcemap: false,
        plugins: [postcssAttributeCaseInsensitive()], 
    })
]

// Base configuration
const BaseConfig = {
  plugins: SharedPlugins,
};

// JavaScript configuration
const JsConfig = {
  ...BaseConfig,
  input: "src/js/global.js",
  output: {
    file: "dist/js/expack.esm.js",
    format: "esm",
    name: "ExPack",
    sourcemap: false,
  },
  external: ['jquery'],
  plugins: [
    ...SharedPlugins,
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

const JsMiniConfig = {
    ...
}

// CSS configuration
const CssConfig = {
  ...BaseConfig,
  input: "src/scss/global.scss",
  output: {
    file: "dist/css/expack.esm.css", // Explicit output for CSS
    format: "esm", // CSS doesn't need module format but this prevents warnings
  },
};

export default [jsConfig, cssConfig];
