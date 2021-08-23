//index for the mountain pic and background music
let mountain;
let mySound;
let textPic;
var fft;
var amp;

//index for rotating boxes
let angle = 0;
let index = 0;

//index for random ellipses
let ax;
let ay;
let axPos;
let ayPos;

let bx;
let by;
let bxPos;
let byPos;

let mouseArg = 0;

let myFont;
let string = "确认存活祝大家新年快乐！";
let a;
let s = 0;
let starPos = [];

//preload image and audio
function preload() {
    mountain = loadImage('http://pic.drafff.art/mountain1.png');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('http://pic.drafff.art/1.mp3');
    myFont = loadFont('http://pic.drafff.art/方正超粗黑繁体.ttf');
}


function setup() {
    mySound.play();
    mySound.loop();
    createCanvas(windowWidth, windowHeight, WEBGL);
    //to analyse the volume and frequency of music
    fft = new p5.FFT();
    amp = new p5.Amplitude();
    textFont(myFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    a = TWO_PI / string.length;
    for (let i = 0; i < 150; i++) {
        let x = random(-width, width);
        let y = random(-height, height);
        starPos.push({
            x: x,
            y: y
        });
    }

}


function draw() {

    background('#1f4287');
    drawStar();
    translate(0, -100, 0);
    let lightColor = map(mouseX, -width / 2, width, 200, 30);
    // ambientMaterial(180, lightColor, 60);
    //sky color change with mouseX
    let sky = mouseX;

    fill(255);
    let skyRed = map(sky, -width / 2, width / 2, 0, 100);
    // let skyGreen = map(sky, -300, 300, 30, 100);

    // //add ambient light to make all 3d shapes visible
    ambientLight(250);
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    //add point light according to the mouse position
    pointLight(skyRed, 180, 180, locX, locY, 100);
    rotateBox(15);
    angle += 0.02;
    index += 0.01; //use index to make the movement in a loop


    //mountain
    texture(mountain);
    push();
    let tGap= millis()/1000;
    let xMig = sin(tGap)*10;
    let yMig = sin(tGap+PI/2)*10;

    translate(0+xMig, 65+yMig, 0);
    rotateX(sin(tGap)/5);
    rotateY(cos(tGap)/5);
    plane(210, 210);
    pop();


    translate(0, -100, -10);
    noStroke();
    ambientMaterial(180, lightColor, 60);
    sphere(38);

    push();
    translate(0, 370, 0);
    ambientMaterial(255, 255, 255);
    // fill(50);
    let r = 100;
    s += 0.01;
    rotateX(PI / 2 + 0.02);
    for (let i = 0; i < string.length; i++) {
        let cs = string.charAt(i);
        push();
        translate(cos((i + 1) * a + s) * r, sin((i + 1) * a) * r);
        rotateX(-PI / 2);
        rotateY(-((i + 1) * a + s) + PI / 2);
        text(cs, 0, 0);
        pop();
    }
    rotateY(millis() / 1000);
    rotateX(millis() / 1000);
    cylinder(20, 75, 16, 1);
    pop();



}


let drawStar = _ => {
    for (let i of starPos) {
        let col = color('#496190');
        if (random(100) > 95) {
            col.setAlpha(random(10) > 5 ? 0 : 255);
        }
        fill(col);
        rect(i.x, i.y, 4, 4);
    }
}

function drawEllipse(xNumMax, yNumMax, xPos, yPos, zPos) {
    push();
    translate(xPos, yPos, zPos);
    for (let x = 0; x < xNumMax; x++) {
        for (let y = 0; y < yNumMax; y++) {
            ellipse(x * 30, y * 30, 20);
        }
    }
    pop();
}



function rotateBox(num) {
    push();
    rotateY(angle * 0.3); //rotate together
    //three layers boxes with different moving speed
    for (let i = 0; i < num; i++) {
        rotateY(PI * 2 / num);
        push();
        translate(0, -90, 130 + cos(index + mouseX / 400) * 120);
        rotateY(angle * 0.5);
        rotateX(angle * 0.2);
        rotateZ(angle * 0.4);
        box(2, 2, 30);
        pop();
    }

    // for (let i = 0; i < num; i++) {

    //     rotateY(PI * 2 / num);
    //     push();
    //     translate(0, -70, 250 - sin(index * 0.8 + mouseX / 500) * 130);
    //     rotateY(angle * 0.9);
    //     rotateX(angle * 0.2);
    //     rotateZ(angle * 0.4);
    //     box(2, 2, 50);
    //     pop();
    // }
    for (let i = 0; i < num; i++) {

        rotateY(PI * 2 / num);

        push();
        translate(0, -50, 100 - mouseX / 5);
        rotateY(angle * 0.3);
        rotateX(angle * 0.3);
        rotateZ(angle * 0.4);
        box(5);
        pop();
    }

    pop();
}

