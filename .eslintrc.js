module.exports = {
  extends: [
    'airbnb',
  ],
  globals: {
    "document": true,
    "window": true
  },
  rules: {
    "max-len": 0,
    "no-console": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
};
