export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: ['<rootDir>/src'],
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
  transform: {
    '^.+\.ts$': 'ts-jest',
  },
};