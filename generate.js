const path = require("path");
const fs = require("fs");

// Paths
const iconsDir = path.join(__dirname, "jsx");
const typesDir = path.join(__dirname, "types");
const distIndexFile = path.join(__dirname, "dist", "index.js");
const typesIndexFile = path.join(typesDir, "index.d.ts");

// Ensure types directory exists
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
}

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  // Filter out .DS_Store and other unwanted files
  const filteredFiles = files.filter((file) => !file.startsWith("."));

  // Generate import statements for the dist/index.js file
  const imports = filteredFiles.map((file) => {
    const componentName = path.basename(file, path.extname(file));
    return `import ${componentName} from './${componentName}';`;
  });

  const exports = filteredFiles.map((file) => {
    const componentName = path.basename(file, path.extname(file));
    return `  ${componentName},`;
  });

  const indexContent = `${imports.join("\n")}\n\nexport {\n${exports.join(
    "\n"
  )}\n};\n`;

  fs.writeFile(distIndexFile, indexContent, (err) => {
    if (err) {
      console.error("Error writing dist/index.js", err);
    } else {
      console.log("dist/index.js has been generated");
    }
  });

  // Generate type declarations for the types/index.d.ts file
  const typeExports = filteredFiles.map((file) => {
    const componentName = path.basename(file, path.extname(file));
    return `  export function ${componentName}(): JSX.Element;`;
  });

  const typesContent = `declare module 'blockbite-icons' {\n${typeExports.join(
    "\n"
  )}\n}\n`;

  fs.writeFile(typesIndexFile, typesContent, (err) => {
    if (err) {
      console.error("Error writing types/index.d.ts", err);
    } else {
      console.log("types/index.d.ts has been generated");
    }
  });
});
