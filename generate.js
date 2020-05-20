const fs = require("fs-extra");
const glob = require("glob");

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function generate(inputPath) {
  const filePaths = glob.sync(`${inputPath}/**/*.json`);

  filePaths.map((path, index) => {
    const label = path.slice(9, getPosition(path, "/", 3));
    const product = path.slice(getPosition(path, "/", 3));

    fs.readJson(path).then((x) => {
      const productImageArray = [];
      const inventoryArray = [];

      x.productImage1 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage1 });
      x.productImage2 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage2 });
      x.productImage3 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage3 });
      x.productImage4 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage4 });
      x.productImage5 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage5 });
      x.productImage6 !== ("./placeholder.png" || "placeholder.png") &&
        productImageArray.push({ productImage: x.productImage6 });

      const item1 = {
        size: x.inventory.size_input_1,
        quantity: parseInt(x.inventory.quantity_input_1),
      };
      const item2 = {
        size: x.inventory.size_input_2,
        quantity: parseInt(x.inventory.quantity_input_2),
      };
      const item3 = {
        size: x.inventory.size_input_3,
        quantity: parseInt(x.inventory.quantity_input_3),
      };
      const item4 = {
        size: x.inventory.size_input_4,
        quantity: parseInt(x.inventory.quantity_input_4),
      };
      const item5 = {
        size: x.inventory.size_input_5,
        quantity: parseInt(x.inventory.quantity_input_5),
      };
      const item6 = {
        size: x.inventory.size_input_6,
        quantity: parseInt(x.inventory.quantity_input_6),
      };
      const item7 = {
        size: x.inventory.size_input_7,
        quantity: parseInt(x.inventory.quantity_input_7),
      };
      const item8 = {
        size: x.inventory.size_input_8,
        quantity: parseInt(x.inventory.quantity_input_8),
      };
      const item9 = {
        size: x.inventory.size_input_9,
        quantity: parseInt(x.inventory.quantity_input_9),
      };
      const item10 = {
        size: x.inventory.size_input_10,
        quantity: parseInt(x.inventory.quantity_input_10),
      };
      const item11 = {
        size: x.inventory.size_input_11,
        quantity: parseInt(x.inventory.quantity_input_11),
      };
      const item12 = {
        size: x.inventory.size_input_12,
        quantity: parseInt(x.inventory.quantity_input_12),
      };
      const item13 = {
        size: x.inventory.size_input_13,
        quantity: parseInt(x.inventory.quantity_input_13),
      };
      const item14 = {
        size: x.inventory.size_input_14,
        quantity: parseInt(x.inventory.quantity_input_14),
      };
      const item15 = {
        size: x.inventory.size_input_15,
        quantity: parseInt(x.inventory.quantity_input_15),
      };

      item1.size !== "" && inventoryArray.push(item1);
      item2.size !== "" && inventoryArray.push(item2);
      item3.size !== "" && inventoryArray.push(item3);
      item4.size !== "" && inventoryArray.push(item4);
      item5.size !== "" && inventoryArray.push(item5);
      item6.size !== "" && inventoryArray.push(item6);
      item7.size !== "" && inventoryArray.push(item7);
      item8.size !== "" && inventoryArray.push(item8);
      item9.size !== "" && inventoryArray.push(item9);
      item10.size !== "" && inventoryArray.push(item10);
      item11.size !== "" && inventoryArray.push(item11);
      item12.size !== "" && inventoryArray.push(item12);
      item13.size !== "" && inventoryArray.push(item13);
      item14.size !== "" && inventoryArray.push(item14);
      item15.size !== "" && inventoryArray.push(item15);

      const newFile = {
        color: x.color,
        sex: x.sex,
        productImages: productImageArray,
        price: x.price,
        productDescription: x.productShortDescription,
        optionalInfo: {
          material: x.material,
          fit: x.fit,
          care: x.care,
          production: x.production,
          sku: x.sku,
          additionalNotes: x.additionalNotes,
        },
        shipping: x.shipping,
        productName: x.productName,
        inventory: inventoryArray,
        sustainable: x.sustainable,
        category: x.category,
      };

      fs.writeFileSync(`./output/${label}${product}`, JSON.stringify(newFile));
    });
  });
}

generate("./labels");
