export default {
  testEnvironment: 'node',
  testMatch: ['**/__test__/**/*.js', '**/?(.)+(spec|test).js'],
  transform: {
    '^.+.js$': 'babel-jest',
  },
}
