const fs = require("fs-extra");
const glob = require("glob");

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function generate(inputPath) {
  const filePaths = glob.sync(`${inputPath}/*.json`);

  filePaths.map((path, index) => {
    fs.readJson(path).then((x) => {
      console.log(JSON.stringify(x), ",");
    });
  });
}

generate("./output/zwaan");
