Package.describe({
  name: "utilities:jsxtemplates",
  version: "0.1.0",
  summary: "JSX-based templates",
  git: "https://github.com/meteor-utilities/Stateless-Templates/",
  documentation: "README.md"
});

var reactVersion = "0.13.0";

Npm.depends({
  "react": reactVersion,
});

Package.registerBuildPlugin({
  name: "compileJSXT",
  use: [],
  sources: [
    "plugin/compile-jsxt.js"
  ],
  npmDependencies: {
    "react-tools": reactVersion
  }
});

Package.onUse(function(api) {

});