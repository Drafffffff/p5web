function preload() {
    font = loadFont("FiraCode-Bold.ttf");
}
let t1 = "S";
let t2 = "B";
let points;
let oriPointsY = [];
let left = [];
let right = [];
let points2;
let oriPointsY2 = [];
let left2 = [];
let right2 = [];
const textsize = 180;
const amplitude = 60;

function setup() {
    createCanvas(windowWidth, 2000);
    background(245);
    textFont(font);
    textSize(textsize);
    fill(255);
    noStroke();
    translate(50, 160);
    // rectMode(CENTER);
    fill(150);
    text(t1, 0, 0);
    text(t2, 150, 0);

    let bbox = font.textBounds(t1, 0, 0, textsize);
    let bbox2 = font.textBounds(t2, 150, 0, textsize);
    // rect(bbox.x, bbox.y, bbox.w, bbox.h);
    fill(255);
    points = font.textToPoints(t1, 0, 0, textsize, {
        "sampleFactor": 1
    });
    points2 = font.textToPoints(t2, 150, 0, textsize, {
        "sampleFactor": 1
    });
    for (let i in points) {
        oriPointsY[i] = points[i].y;
        if (points[i].x < (bbox.x + (bbox.w / 2))) {
            left.push(i);
        } else {
            right.push(i);
        }
    }
    for (let i in points2) {
        oriPointsY2[i] = points2[i].y;
        if (points2[i].x < (bbox2.x + (bbox2.w / 2))) {
            left2.push(i);
        } else {
            right2.push(i);
        }
    }
}

function draw() {

    translate(50, 160);
    noStroke();
    fill(20);
    textSize(textsize);
    text(t1, 0, 0);
    text(t2, 150, 0);
    fill(0);
    for (let i in points) {
        if (right.includes(i)) {
            // print('right',i);
            points[i].y += 1;
            let cy = points[i].y - oriPointsY[i]
            let strength = map(points[i].y, oriPointsY[i], height * 0.8, 0.5, 0);
            let alp = map(points[i].y, oriPointsY[i], height, 100, -20);
            fill(0, alp);
            let cx = sin(cy / amplitude + PI / 4) * strength;
            points[i].x -= cx;
            ellipse(points[i].x, points[i].y, 0.5, 0.5);
            if (points[i].y > height) {
                noLoop();
            }
        }
        if (left.includes(i)) {
            points[i].y += 1;
            let cy = points[i].y - oriPointsY[i]
            let strength = map(points[i].y, oriPointsY[i], height * 0.8, 0.5, 0);
            let alp = map(points[i].y, oriPointsY[i], height, 100, 0);
            fill(0, alp);
            let cx = sin(cy / amplitude + PI / 4) * strength;
            points[i].x += cx;
            ellipse(points[i].x, points[i].y, 0.5, 0.5);
            if (points[i].y > height) {
                noLoop();
            }

        }
    }
    for (let i in points2) {
        if (right2.includes(i)) {
            // print('right',i);
            points2[i].y += 1;
            let cy = points2[i].y - oriPointsY2[i]
            let strength = map(points2[i].y, oriPointsY2[i], height * 0.8, 0.5, 0);
            let alp = map(points2[i].y, oriPointsY2[i], height, 100, -20);
            fill(0, alp);
            let cx = sin(cy / amplitude + PI / 4) * strength;
            points2[i].x -= cx;
            ellipse(points2[i].x, points2[i].y, 0.5, 0.5);
            if (points2[i].y > height) {
                noLoop();
            }
        }
        if (left2.includes(i)) {
            points2[i].y += 1;
            let cy = points2[i].y - oriPointsY2[i]
            let strength = map(points2[i].y, oriPointsY2[i], height * 0.8, 0.5, 0);
            let alp = map(points2[i].y, oriPointsY2[i], height, 100, 0);
            fill(0, alp);
            let cx = sin(cy / amplitude + PI / 4) * strength;
            points2[i].x += cx;
            ellipse(points2[i].x, points2[i].y, 0.5, 0.5);
            if (points2[i].y > height) {
                noLoop();
            }

        }
    }

    fill(20);
    textSize(15);
    text("By Drafff", width - 100 - 50, height - 20 - 160);
    // noLoop();
}