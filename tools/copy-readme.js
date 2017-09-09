const fs = require('fs');

let resizable = fs.readFileSync('README.md').toString();
fs.writeFileSync('dist/README.md', resizable);
