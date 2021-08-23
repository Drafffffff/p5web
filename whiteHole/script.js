let xoff = 0;
let yoff = 0;
let inc = 1.0;
let siz = 100;
let scl;

function setup() {
    createCanvas(windowWidth, windowHeight);
    scl = min(width,height)/2-20;
}

function draw() {
    background(20);
    translate(width / 2, height / 2);
    mainThing(scl);

}

let mainThing = (rr) => {
    // siz = rr;
    noFill();
    let r = rr;
    stroke(255, 30);
    let line_count = 10;
    for (let i = 0; i < line_count; i++) {
        let t = i / line_count * 7; //透明度
        stroke(255, t);
        strokeWeight((line_count - i) * rr/20);
        noFill();
        ellipse(0, 0, 2*rr, 2*rr);
    }
    for (let i = 0; i < line_count; i++) {
        let t = i / line_count * 50; //透明度
        stroke(255, t);
        fill(255, t);
        let rad = (line_count - i) /40*r;
        ellipse(0, 0, rad, rad);
    }
    fill(255);
    ellipse(0, 0, rr/10, rr/10);
    noFill();
    strokeWeight(1);
    stroke(255, 90);
    for (let y = 0; y < siz; y++) {
        for (let x = 0; x < siz; x++) {
            let noi = noise(xoff, yoff) * TWO_PI * 2;
            let alp = map(r, 0, rr, 100, 40);
            stroke(255, alp);
            point(cos(noi) * r, sin(noi) * r);
            xoff += inc;
        }
        r = map(y, siz, 0, 0, rr);
        yoff += inc;
        // r = constrain(r, 10, 200);
    }

}