let siz = 100;
let [xoff, yoff] = [0, 0];
let [xoff1, yoff1] = [100, 100];
let inc = 1;

function setup() {
    createCanvas(400, 400);
    background(80);
}


function draw() {
    background(80);
    stroke(255,95);
    translate(width / 2, height / 2);
    fill(255);
    ellipse(0,0,20,20);
    noFill();
    ellipse(0, 0, 400, 400);
    // yoff = 0;
    let r = 200.0;
    for (let y = 0; y < siz; y++) {
        xoff = 0;
        for (let x = 0; x < siz-50; x++) {
            let noi = noise(yoff, xoff)*TWO_PI*2;
            point(cos(noi)*r, sin(noi)*r);
            xoff += inc;
        }
        yoff += inc;
        r -= 2;
        r = constrain(r, 10, 200);
    }

    // noLoop();
}
// print(frameCount)

