const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../Du_lieu/Tivi');
const jsonPattern = new RegExp('(.json)$');
const getTiviList = () => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject(err);
      }
      const jsonFileRelativePaths = files.filter(file => {
        return file.match(jsonPattern);
      });
      jsonFileRelativePaths.forEach(relativePath => {
        const filePath = path.join(directoryPath, relativePath);
        const text = fs.readFileSync(filePath, 
              {encoding:'utf8', flag:'r'}); 
        const jsonData = JSON.parse(text);
        data.push(jsonData);
      });
      console.log(resolve);
      resolve(data);
    });
  });
};

module.exports = {
  getTiviList,
};
