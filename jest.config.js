module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    './**/*.test.(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: ['**/node_modules/**']
}
