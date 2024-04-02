const fs = require('fs');
const path = require('path');

// Replace with the actual path to your icons directory
const iconsDir = path.join(__dirname, 'jsx');

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const exports = files.map(file => {
    // Remove the file extension to get the component name
    const componentName = path.basename(file, path.extname(file));
    return `export function ${componentName}(): JSX.Element;`;
  });

  const content = `declare module 'blockbite-icons' {\n  ${exports.join('\n  ')}\n}`;

  fs.writeFile(path.join(__dirname, 'types', 'index.d.ts'), content, err => {
    if (err) {
      console.error('Error writing index.d.ts', err);
    } else {
      console.log('index.d.ts has been generated');
    }
  });
});