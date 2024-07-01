const fs = require("fs");
const path = require("path");

const sourceDir = "./jsx";
const destDir = "./dist";

const files = fs.readdirSync(sourceDir);

files.forEach((file) => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);

  // Read file content
  let content = fs.readFileSync(sourcePath, "utf-8");

  // Replace fill="black" and stroke="black"
  content = content.replace(/fill="black"/g, 'fill="currentColor"');
  content = content.replace(/stroke="black"/g, 'stroke="currentColor"');

  // Write the modified content to the destination file
  fs.writeFileSync(destPath, content);
});

files.forEach((file) => {
  const baseName = path.basename(file, ".jsx");
  const jsFilePath = path.join(destDir, `${baseName}.js`);
  const dtsFilePath = path.join(destDir, `${baseName}.d.ts`);

  const jsContent = `import ${baseName} from './${file}';
export default ${baseName}Icon;`;

  const dtsContent = `declare module 'blockbite-icons/dist/${baseName}' {
    import React from 'react';
    const ${baseName}: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ${baseName}Icon;
}`;

  fs.writeFileSync(jsFilePath, jsContent);
  fs.writeFileSync(dtsFilePath, dtsContent);
});
