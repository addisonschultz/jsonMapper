const fs = require("fs-extra");
const glob = require("glob");

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function generate(inputPath) {
  const filePaths = glob.sync(`${inputPath}/**/*.json`);

  filePaths.map((path, index) => {
    // console.log(path, index);

    const label = path.slice(9, getPosition(path, "/", 3));
    const product = path.slice(getPosition(path, "/", 3));

    fs.readJson(path).then((x) => {
      const newFile = {
        test: 1,
      };

      fs.writeFileSync(`./output/${label}${product}`, JSON.stringify(newFile));
    });
  });
}

generate("./labels");
