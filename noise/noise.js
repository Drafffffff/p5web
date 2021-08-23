let cols, rows;
let scl = 2;
let forces = [];
let pos = [];
let inc = 0.003;
let pC = [];
let colors

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#3B1C38");
    rows = width / scl;
    cols = height / scl;
    colors = [color("#FF8F78"), color("#E8706D"), color("#FF85B8"), color("#E86DDE"), color("#E078FF"), color("#FFD1E4")];
    let yoff = 0;
    for (let i = 0; i < 600; i++) {
        pos.push(new p5.Vector(random(width), random(height)));
        pC.push(random(colors));
    }
    for (let x = 0; x < rows; x++) {
        let xoff = 0;
        for (let y = 0; y < cols; y++) {
            let angle = noise(xoff, yoff) * TWO_PI * 5;
            let f = p5.Vector.fromAngle(angle);
            forces.push(f);
            // push();
            // translate(x * scl, y * scl);
            // rotate(f.heading());
            // line(0, 0, scl, 0);
            // pop();
            xoff += inc;
        }
        yoff += inc;
    }
    // noLoop();
}

function draw() {
    noStroke();
    fill(50);
    for (let i = 0; i < pos.length; i++) {
        with(pos[i]) {
            let fx = floor(x / scl);
            let fy = floor(y / scl);
            let index = fy + fx * cols;
            ellipse(x, y, 2, 2);
            fill(pC[i]);
            x += forces[index].x;
            y += forces[index].y;
            if (x > width || x < 0 || y > height || y < 0 || random(1) < 0.001) {
                x = random(width);
                y = random(height);
            }
        }
    }
}
