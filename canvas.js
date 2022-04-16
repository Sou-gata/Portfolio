const canvas = document.querySelector("#canvas-one");
const ctx = canvas.getContext("2d");
const sectionHome = document.querySelector(".section-home");
let sectionHomeInfo = sectionHome.getBoundingClientRect();
canvas.width = sectionHomeInfo.width;
canvas.height = sectionHomeInfo.height;
let particleArr = [];
let hue = 171;
let mouse = {
    x: undefined,
    y: undefined,
};
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${color}, 100%, 50%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.03;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
function init() {
    for (let i = 0; i < particleArr.length; i++) {
        particleArr[i].draw();
        particleArr[i].update();
        if (particleArr[i].size <= 0.3) {
            particleArr.splice(i, 1);
            i--;
        }
    }
}
function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    // hue++;
    requestAnimationFrame(animation);
}
animation();
sectionHome.addEventListener("mousemove", (e) => {
    sectionHomeInfo = sectionHome.getBoundingClientRect();
    mouse.x = e.x - sectionHomeInfo.x;
    mouse.y = e.y - sectionHomeInfo.y;
    for (let i = 0; i < 5; i++) {
        particleArr.push(new Particle(mouse.x, mouse.y, hue));
    }
});
window.addEventListener("resize", () => {
    sectionHomeInfo = document
        .querySelector(".section-home")
        .getBoundingClientRect();
    canvas.width = sectionHomeInfo.width;
    canvas.height = sectionHomeInfo.height;
});
