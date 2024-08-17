// grayscale in ascii, dark => light
const ascii = '@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`. '

let img;
let pixelation_level = 8;

function preload() {
  img = loadImage("./images/fish.png")
}

function setup() {
  createCanvas(300, 300); // sets width and height
  background(0); // black background
  noStroke(); // hides grid

  // ratio of canvas to image
  let w = width / img.width;
  let h = height / img.height;
  
  img.loadPixels(); // loads pixel array for image
 
  // looking at brightness of pixels 
  for (let y = 0; y < img.height; y += pixelation_level) {
    for (let x = 0; x < img.width; x += pixelation_level) {

      let i = (x + y * img.width) * 4; // pixel index
      let r = img.pixels[i + 0];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      let grayscale = (r + g + b) / 3 // gray scale 

      // maps gray to ascii gray
      const densityMap = Math.floor(map(grayscale, 0, 255, ascii.length, 0))
      
      fill(255);
      textSize('w'); // large words
      text(ascii.charAt(densityMap), x * w , y * h) // draws letter on canvas
    }
  }
}