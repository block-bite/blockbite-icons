const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const sourceDir = "./jsx";
const destDir = "./dist";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith(".jsx"));

files.forEach((file) => {
  const baseName = path.basename(file, ".jsx");
  const sourcePath = path.join(sourceDir, file);
  const jsFilePath = path.join(destDir, `${baseName}.js`);
  const dtsFilePath = path.join(destDir, `${baseName}.d.ts`);

  // Transpile JSX -> JS using Babel
  const { code } = babel.transformFileSync(sourcePath, {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  });

  fs.writeFileSync(jsFilePath, code);

  // Write .d.ts file
  const dtsContent = `declare module '@blockbite/icons/dist/${baseName}' {
    import React from 'react';
    const ${baseName}: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ${baseName};
  }`;

  fs.writeFileSync(dtsFilePath, dtsContent);
});
