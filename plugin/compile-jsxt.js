var reactTools = Npm.require('react-tools');

function handler(compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";
  var componentName = compileStep.pathForSourceMap.slice(0, -5);

  var htmlStart = source.indexOf("<");
  var htmlEnd = source.lastIndexOf(">");

  var prefix = componentName + " = (props) => (\n";
  var suffix = "\n)";

  var headerJS = source.slice(0, htmlStart);
  var html = source.slice(htmlStart, htmlEnd+1);
  var footerJS = source.slice(htmlEnd+1);

  var fullSource = headerJS + prefix + html + suffix + footerJS;

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: reactTools.transform(fullSource, {
      harmony: true
    })
  });
}

Plugin.registerSourceHandler("jsxt", handler);