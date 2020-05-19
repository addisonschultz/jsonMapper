var fs = require("fs"),
  path = require("path");

function reducer(jsonFile) {
  Object.keys(jsonFile).map(function (key, index) {
    console.log(jsonFile[key]);
    return {
      // labelInfo: {
      //   labelAddress: "Koninginneweg 56-4",
      //   labelPhone: "+31657811633",
      //   labelImage: "japan_001.jpg",
      //   labelDescription: "A description",
      //   labelEmail: "addisonschultz0@gmail.com",
      // },
      products: [
        {
          color: jsonFile[key].color,
          sex: jsonFile[key].sex,
          // productImages: [
          //   {
          //     productImage: "japan_002.jpg",
          //   },
          // ],
          price: jsonFile[key].price,
          productDescription: jsonFile[key].productShortDescription,
          optionalInfo: {
            material: jsonFile[key].material,
            fit: jsonFile[key].fit,
            care: jsonFile[key].care,
            production: jsonFile[key].production,
            sku: jsonFile[key].sku,
            additionalNotes: jsonFile[key].additionalNotes,
          },
          shipping: jsonFile[key].shipping,
          productName: jsonFile[key].productName,
          // inventory: [
          //   {
          //     size: "Medium",
          //     quantity: 3,
          //   },
          // ],
          sustainable: jsonFile[key].sustainable,
          category: jsonFile[key].category,
        },
      ],
      // labelName: "Creators Club",
    };
  });
}

reducer();
