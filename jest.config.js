/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      { configFile: './babel.config.jest.js' },
    ],
  },
  moduleNameMapper: {
    // Map CSS imports to identity-obj-proxy so they don't crash in Node
    '\\.css$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/**/*-test.(ts|tsx|js|jsx)'],
};
