let img;
let pixelation_level = 8;

function preload() {
  img = loadImage("./images/fish.gif")
}

function setup() {
  createCanvas(700, 350); // set width and height 
  pixelDensity(1); // compress pixels
  noStroke(); // hides grid
}

function draw() {
  image(img, 0, 0, width, height); // draws the image
  loadPixels(); // load the pixels array.

  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      
      let i = (x + y * width) * 4; // pixel index
      let r = pixels[i + 0]; // loaded via loadPixels
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let grayscale = (r + g + b) / 3

      fill(grayscale) // pixels with colors
      square(x, y, pixelation_level);
    }
  }

}