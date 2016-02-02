var reactTools = Npm.require('react-tools');

function handler(compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";
  var componentName = compileStep.pathForSourceMap.slice(0, -5);

  var prefix = componentName + " = (props) => (\n";
  var suffix = "\n)";

  var fullSource = prefix+source+suffix;

  console.log(compileStep)

  console.log(fullSource)
  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: reactTools.transform(fullSource, {
      harmony: true
    })
  });
}

Plugin.registerSourceHandler("jsxt", handler);