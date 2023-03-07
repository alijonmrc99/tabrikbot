const fs = require("fs");
var path = require("path");
const Canvas = require("canvas");
function createImg(username) {
  function fontFile(name) {
    return path.join(__dirname, "/fonts/", name);
  }

  Canvas.registerFont(fontFile("GreatVibes-Regular.ttf"), {
    family: "EBGaramond",
  });

  var Image = Canvas.Image;
  var img = new Image();
  img.src = "img/img.png";

  var canvas = Canvas.createCanvas(img.width, img.height);
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  console.log(img.width);

  ctx.fillStyle = "#6e7663";
  ctx.textAlign = "left";

  ctx.font = "120pt EBGaramond";
  ctx.fillText(username, 650, 300);
  const imgBuffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./resources/drawnImage.png", imgBuffer);
  return canvas.toDataURL();
}

module.exports = createImg;
