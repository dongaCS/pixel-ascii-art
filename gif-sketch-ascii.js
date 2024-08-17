// grayscale in ascii, dark => light
const ascii = `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^'. `

let img;
let pixelation_level = 5;

function preload() {
    img = loadImage("./images/fish.gif")
}

function setup() {
    createCanvas(700, 350); // sets width and height
    background(0); // black background
}

function draw() {
    image(img, 0, 0, width, height); // sets image with 0 left and 0 top margin, and size to width and height 
    tint(0, 255) // hides the image background
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
            let gray = (r + g + b) / 3 // gray scale 

            // maps gray to ascii gray
            const densityMap = Math.floor(map(gray, 0, 255, ascii.length, 0))

            fill(255); 
            textSize('w'); // large words
            textAlign(CENTER, CENTER);
            text(ascii.charAt(densityMap), x * w , y * h)
        }
    }
}