const express = require('express');
const path = require('path');
const app = express();
const angularConfig = require('./angular');
const packageConfig = require('./package');

const appName = packageConfig.name;
const appDir = angularConfig.projects[packageConfig.name].architect.build.options.outputPath;

console.log(appName);
console.log(appDir);

app.use(express.static(`${__dirname}/${appDir}`));

app.get('/*', (req, res) => {
  // res.send('Hola mundo!');
  res.sendFile(path.join(`${__dirname}/${appDir}/index.html`));
});

app.listen(8080, () => {
  console.log("Server online");
});