function setup() {
    createCanvas(windowWidth, windowHeight);
}
let ptouch = 0
let r = 100;
let t = 0;
let noiseMax = 0.5;
let zoff = 0;

function draw() {
    blendMode(BLEND);
    background(250);
    translate(width / 2, height / 2-height*0.15);
    blendMode(MULTIPLY);
    stroke('#00FFFF');
    strokeWeight(10);
    noFill();
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
        let xoff = map(cos(a + t), -1, 1, 0, noiseMax);
        let yoff = map(sin(a + t), -1, 1, 0, noiseMax);
        r = map(noise(xoff, yoff, zoff), 0, 1, 50, 100);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);

    stroke('#FF00FF');
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
        let xoff = map(cos(a + t + 100), -1, 1, 0, noiseMax);
        let yoff = map(sin(a + t + 100), -1, 1, 0, noiseMax);
        r = map(noise(xoff, yoff, zoff), 0, 1, 50, 100);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);


    stroke('#FFFF00');
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
        let xoff = map(cos(a + t + 200), -1, 1, 0, noiseMax);
        let yoff = map(sin(a + t + 200), -1, 1, 0, noiseMax);
        r = map(noise(xoff, yoff, zoff), 0, 1, 50, 100);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);

    t += 0.01;
    zoff += 0.01; // noLoop();
}

function touchMoved() {

    if (mouseX > ptouch) {
        noiseMax += 0.05;

    } else if (mouseX < ptouch) {
        noiseMax -= 0.05;


    }
    ptouch = mouseX;
    noiseMax = constrain(noiseMax, 0.2, 5);


}