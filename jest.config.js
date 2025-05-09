/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@types/(.*)$": "<rootDir>/src/utils/types/$1"
  }
};
