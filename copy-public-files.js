// Simple script to copy necessary files to dist folder
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to copy from public to dist
const filesToCopy = [
  '404.html',
  '200.html',
  '_routes.json',
  '.nojekyll'
];

// Create .nojekyll if it doesn't exist
const nojekyllPath = path.join(__dirname, 'public', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
}

// Copy each file
filesToCopy.forEach(file => {
  const sourcePath = path.join(__dirname, 'public', file);
  const destPath = path.join(__dirname, 'dist', file);
  
  // Check if source file exists
  if (fs.existsSync(sourcePath)) {
    // Copy the file
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to dist folder`);
  } else {
    console.warn(`Warning: ${file} not found in public folder, skipping...`);
  }
});

console.log('All public files copied to dist folder successfully!');
