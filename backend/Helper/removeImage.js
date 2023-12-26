const path = require("path");
const fs = require("fs");

const deletePreviousImage = (imagePath) => {
 console.log(imagePath)
 const pathOfImage = path.join(__dirname,"../","uploads",imagePath)
  if (pathOfImage) {
    fs.unlink(pathOfImage, (err) => {
      if (err) {
        err.statusCode = 500;
        throw new Error(err);
      }
    });
  }
};

module.exports = deletePreviousImage;