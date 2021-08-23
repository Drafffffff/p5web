class Particle {
    constructor(pos_, c) {
        this.pos = pos_;
        this.noiseScl = 800;
        this.noiseStrengt = 60;
        this.lifeSpan = 80;
        this.col = hexToRgb(c);
        this.step = 1;
    }
    update() {
        let angle = noise(this.pos.x / this.noiseScl, this.pos.y / this.noiseScl) * this.noiseStrengt;
        this.pos.x += cos(angle) * this.step;
        this.pos.y += sin(angle) * this.step;
        this.lifeSpan -= 0.1;
    }
    show() {
        noStroke();
        let a = map(this.lifeSpan, 0, 80, 0, 100);
        let r = map(this.lifeSpan, 0, 80, 0, 1)
        fill(this.col[0], this.col[1], this.col[2], this.lifeSpan);
        ellipse(this.pos.x, this.pos.y, r, r);
    }
    isDead() {
        if (this.lifeSpan < 0) {
            return true;
        } else {
            return false;
        }
    }
}
let hexToRgb = (hex) => {
    let color = [],
        rgb = [];

    hex = hex.replace(/#/, "");

    if (hex.length == 3) { // 处理 "#abc" 成 "#aabbcc"
        let tmp = [];
        for (let i = 0; i < 3; i++) {
            tmp.push(hex.charAt(i) + hex.charAt(i));
        }
        hex = tmp.join("");
    }

    for (let i = 0; i < 3; i++) {
        color[i] = "0x" + hex.substr(i * 2, 2);
        rgb.push(parseInt(Number(color[i])));
    }
    return rgb;
};