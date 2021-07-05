module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["<rootDir>", "node_modules"],
  moduleNameMapper: {
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/utils/fileMock/index.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js)x?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  setupFilesAfterEnv: ["<rootDir>/src/utils/setupTests/index.js"],
};
