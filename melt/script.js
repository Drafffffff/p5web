let particles = [];
let n = 40;
function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(2);
    // colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);
    newParticles();
}
function draw() {
    for (let i in particles) {
        let p = particles[i];
        p.update();
        p.show();
        if (p.isDead()) {
            particles.splice(i, 1);
        }
    }
    // noLoop();
}
let newParticles = () => {
    particles = [];
    background('#FCFCF0');
    forms();
    noiseSeed(random(100000));
}
let forms = () => {
    for (let j = 0; j < n; j++) {
        let [x, y] = [random(width), random(height)];
        let s = random(20, 90);
        let hs = s / 2;
        let c = getCol();
        noStroke();
        fill(c);
        if (random(1) > 0.5) {
            for (let i = -hs; i < hs; i++) {
                let p1 = createVector(x + i, y - hs);
                let p2 = createVector(x + i, y + hs);
                let p3 = createVector(x - hs, y + i);
                let p4 = createVector(x + hs, y - i);
                particles.push(new Particle(p1, c));
                particles.push(new Particle(p2, c));
                particles.push(new Particle(p3, c));
                particles.push(new Particle(p4, c));
            }
            rect(x, y, s, s);
        } else {
            for (let a = 0; a < TAU; a += TAU / 360) {
                let p1 = createVector(x + hs * cos(a), y + hs * sin(a));
                particles.push(new Particle(p1, c));
            }
            ellipse(x, y, s, s);
        }
    }
}
function mouseMoved() {
    newParticles();
}
let colors = ['#e4572e', '#29335c', '#f3a712', '#a8c686', '#669bbc', '#efc2f0'];
function getCol() {
    return random(colors);
}