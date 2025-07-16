const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ✅ Folders to convert
const folders = [
  'coldrinks',
  'Fries',
  'Pizza',
  'Breakfast',
  'Noodles'
];

// ✅ Loop through each folder
folders.forEach(folderName => {
  const inputDir = path.join(__dirname, `src/assets/images/Cafe/${folderName}`);
  const outputDir = path.join(__dirname, `src/assets/images/Cafe/${folderName}-webp`);

  // Ensure output folder exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read and convert each image
  fs.readdirSync(inputDir).forEach(file => {
    if (/\.(jpe?g|png)$/i.test(file)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)/i, '.webp'));

      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`✅ ${folderName}: Converted ${file}`))
        .catch(err => console.error(`❌ ${folderName}: Error converting ${file}`, err));
    }
  });
});
