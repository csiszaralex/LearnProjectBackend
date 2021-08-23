export default {
  roots: ['<rootDir>/tests'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  verbose: true,
  collectCoverage: true,
  // collectCoverageFrom: ['**/*'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
