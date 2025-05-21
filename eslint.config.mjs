import cssPlugin from 'eslint-plugin-css';
import cssModulesPlugin from 'eslint-plugin-css-modules';

// Custom minimal parser that satisfies ESLint's requirements
const dummyParser = {
  parseForESLint(code) {
    return {
      ast: {
        type: "Program",
        body: [],
        comments: [],
        tokens: [],  // Required by ESLint
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 0 } },
        range: [0, 0]
      },
      scopeManager: null,
      services: {},
      visitorKeys: {}
    };
  }
};

export default [
  // Regular CSS files
  {
    files: ["**/*.css"],
    plugins: { css: cssPlugin },
    languageOptions: {
      parser: dummyParser
    },
    rules: {
      "css/no-unknown-property": "off",
      "css/no-unknown-selector": "off",
      "css/no-invalid-color-hex": "error"
    }
  },

  // CSS Modules
  {
    files: ["**/*.module.css"],
    plugins: {
      "css-modules": {
        rules: cssModulesPlugin.rules
      }
    },
    languageOptions: {
      parser: dummyParser
    },
    rules: {
      "css-modules/no-parsing-error": "off",
      "css-modules/no-undef-class": "error",
      "css-modules/no-unused-class": "warn"
    },
    settings: {
      "css-modules": {
        basePath: "./src"
      }
    }
  }
];