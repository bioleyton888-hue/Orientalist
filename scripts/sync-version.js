// Syncs the version from package.json into descriptor.mod
// Runs automatically via the npm "version" lifecycle hook
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));
const modPath = path.join(root, 'descriptor.mod');

let mod = fs.readFileSync(modPath, 'utf8');
mod = mod.replace(/version="[^"]*"/, `version="${pkg.version}"`);
fs.writeFileSync(modPath, mod);

console.log(`descriptor.mod → version="${pkg.version}"`);
