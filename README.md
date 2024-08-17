# Pixel Ascii Art


## Setup
- Install extension: [p5.vscode v1.2.16 by Sam Lavigne](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode)
- On the `Menu Bar` => `View` => `Command Palette` => `Create p5.js Project`
- Should generate files:
```
libraries
  - p5.min.js
  - p5.sound.min.js
index.html
jsconfig.json
sketch.js
style.css
```
We work with `sketch.js` to create the canvas
``` JS
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
```
## Results
### Fish.png
| Base | Pixel | Pixel Grayscale | Ascii |
| --- | --- | --- | --- |
| ![Fish.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/fish.png?raw=true) | ![Fish Pixel.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch.png?raw=true) | ![Fish Pixel Gray.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch-gray.png?raw=true) | ![Fish Ascii.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch-ascii.png?raw=true) |
| - | sketch.js | sketch-gray.js | sketch-ascii.js |
