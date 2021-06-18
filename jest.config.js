require('jest-preset-angular/ngcc-jest-processor');
module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/app/core/$1',
    '@shared/(.*)': '<rootDir>/app/shared/$1',
  },
  rootDir: 'src',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../setup-jest.ts'],
};
