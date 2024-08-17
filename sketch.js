let img;
let pixelation_level = 8;

function preload() {
  img = loadImage("./images/fish.png")
}

function setup() {
  createCanvas(300, 300); // set width and height 
  pixelDensity(1); // compress pixels
  noStroke(); // hides grid

  image(img, 0, 0, width, height); // draws the image
  loadPixels(); // load the pixels array => this draws the squares

  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      
      let i = (x + y * width) * 4; // pixel index
      let r = pixels[i + 0]; // loaded via loadPixels
      let g = pixels[i + 1];
      let b = pixels[i + 2];

      fill(r, g, b) // fill pixels with colors
      square(x, y, pixelation_level); // sets the pixels to be squares
    }
  }
}