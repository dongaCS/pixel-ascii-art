# Pixel Ascii Art
![HTML5](https://img.shields.io/badge/HTML5-%23e34c26?logo=html5&logoColor=white)
![JS](https://img.shields.io/badge/JS-%23f7df1e?logo=javascript&logoColor=black)
![p5*](https://img.shields.io/badge/p5*-FE019A?logo=p5.js)

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
|:---:|:---:|:---:|:---:|
| ![Fish.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/fish.png?raw=true) | ![Fish Pixel.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch.png?raw=true) | ![Fish Pixel Gray.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch-gray.png?raw=true) | ![Fish Ascii.png](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/sketch-ascii.png?raw=true) |
| [Image Source](https://en.m.wikipedia.org/wiki/File:Crystal_128_babelfish.svg) | sketch.js | sketch-gray.js | sketch-ascii.js |

---
### Fish.gif
| Base | Pixel |
| :---: |:---:|
| ![Fish.gif](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/fish.gif?raw=true) | ![Fish Pixel.gif](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/gif-sketch.png?raw=true) |
| [Image Source](https://www.pinterest.com/pin/441352832214910201/) | gif-sketch.js |

| Pixel Grayscale | Ascii |
|:---:|:---:|
| ![Fish Pixel.gif](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/gif-sketch-gray.png?raw=true) | ![Fish Pixel.gif](https://github.com/dongaCS/pixel-ascii-art/blob/main/images/gif-sketch-ascii.png?raw=true) |
| gif-sketch-gray.js | gif-ascii.js |

NOTE: currently gif runs fine in browser, however the saveGif function on the documents is not working for this instance. The function only saves a single frame for X seconds. No solution found other than to use saveFrame to generate 50+ png and stitch them together to make a gif. **Place at bottom of .js**. 

$WARNING:$ will generate MANY files.
```JS
// saveFrames(filename, extension, duration, framerate, [callback])
function keyPressed() {
  if (key === 's') {
    saveFrames('frame', 'png', 1, 5);
  }
}
```