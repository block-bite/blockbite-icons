const fs = require('fs');

// Get all the files in the current directory
const files = fs.readdirSync(__dirname);

// Export each file as a named export
files.forEach((file) => {
  // Exclude the index.js file itself
  if (file !== 'index.js') {
    const iconName = file.replace('.js', '');
    module.exports[iconName] = require(`./${file}`).default;
  }
});


