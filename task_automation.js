const fs = require('fs');
const path = require('path');

const directoryPath = 'task_automation';

// Create directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
}

// Create three text files with content
for (let i = 1; i <= 3; i++) {
  const fileName = `file${i}.txt`;
  fs.writeFileSync(path.join(directoryPath, fileName), `Content for ${fileName}`);
}

// Concatenate content of the three files into a new file
const concatenatedContent = fs.readdirSync(directoryPath)
  .filter(file => file.startsWith('file'))
  .map(file => fs.readFileSync(path.join(directoryPath, file), 'utf-8'))
  .join('\n');

fs.writeFileSync(path.join(directoryPath, 'concatenated.txt'), concatenatedContent);

// Print the content of "concatenated.txt" to the console
console.log(concatenatedContent);

// Delete "file1.txt," "file2.txt," and "file3.txt" from the directory
for (let i = 1; i <= 3; i++) {
  const fileName = `file${i}.txt`;
  fs.unlinkSync(path.join(directoryPath, fileName));
}
