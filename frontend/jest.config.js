export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
