module.exports = {
  displayName: 'redux',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/redux',
  coveragePathIgnorePatterns: ['/node_modules/', '/testUtils/'],
};
