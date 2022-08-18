module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        useBuiltIns: "entry",
        forceAllTransforms: true,
        corejs: "3",
      },
    ],
    "@babel/react",
    "@babel/typescript",
  ],
};
