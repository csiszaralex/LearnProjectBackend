export default {
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  // A set of global variables that need to be available in all test environments
  // globals: {},
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
};
