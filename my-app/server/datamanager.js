const fs = require('fs');


const write = (filename, data) => {
  fs.writeFile(__dirname + "/data/" + filename + '.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log(`Data written to ${filename}`);
});
}

/*
const fileGet = (name) => {
  filename = `./data/${name}.json`;
  let obj = [];
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
    obj = JSON.parse(data);
    return obj;
});
}
*/

module.exports = {
  write
}