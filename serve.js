const express = require('express');
const path = require('path');
const app = express();
const angularConfig = require('./angular');
const packageConfig = require('./package');

const port = process.env.PORT || 8080;
const appName = packageConfig.name;
const appDir = angularConfig.projects[packageConfig.name].architect.build.options.outputPath;

console.log(appName);
console.log(appDir);

app.use(express.static(`${__dirname}/${appDir}`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/${appDir}/index.html`));
});

console.log("Server is starting...");
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});