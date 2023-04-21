let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// background
//sky
let grd = ctx.createLinearGradient(0, 0, 0, 350);
grd.addColorStop(0, "royalblue");
grd.addColorStop(1, "white");

ctx.beginPath();
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 2000, 300);
ctx.closePath();
//sand
ctx.beginPath();
ctx.fillStyle = "moccasin";
ctx.fillRect(0, 300, 2000, 600);
ctx.closePath();

//water
ctx.beginPath();
ctx.fillStyle = "aquaMarine";
ctx.fillRect(0, 450, 2000, 500);
ctx.closePath();
let grd2 = ctx.createRadialGradient(500, 600, 80, 500, 600, 250);
grd2.addColorStop(0, "royalBlue");
grd2.addColorStop(0.5, "darkgreen");
grd2.addColorStop(1, "aquaMarine");

// ctx.beginPath();
// ctx.fillStyle = grd2;
// ctx.fillRect(100, 450, 750, 400);
// ctx.closePath();

let grd3 = ctx.createRadialGradient(800, 500, 50, 800, 100, 700);
grd3.addColorStop(0, "black");
grd3.addColorStop(1, "darkGreen");

ctx.beginPath();
ctx.ellipse(900, 600, 600, 150, 0, Math.PI * 2, 0, Math.PI * 2);
ctx.fillStyle = grd3;
ctx.fill();
ctx.closePath();

// ctx.beginPath();
// ctx.ellipse(950, 630, 730, 130, Math.PI / 1, 0, 2 * Math.PI);
// ctx.fillStyle = grd2;
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(950, 630, 600, 95, Math.PI / 1, 0, 2 * Math.PI);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();

//rock bottom
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(0, 800, 2000, 200);
ctx.closePath();
//rockery left
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(400, 300);
ctx.lineTo(0, 800);
ctx.fillStyle = "brown";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(80, 580, 80, 150);
ctx.closePath();
ctx.beginPath();
ctx.moveTo(0, 650);
ctx.lineTo(300, 800);
ctx.lineTo(0, 800);
ctx.fillStyle = "brown";
ctx.fill();
ctx.closePath();
//rockey right
ctx.beginPath();
ctx.moveTo(2000, 200);
ctx.lineTo(1400, 300);
ctx.lineTo(2000, 800);
ctx.fillStyle = "brown";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(2000, 550);
ctx.lineTo(1700, 800);
ctx.lineTo(2000, 800);
ctx.fillStyle = "brown";
ctx.fill();
ctx.closePath();

//swan wing rightside
ctx.beginPath();
ctx.ellipse(590, 605, 50, 28, Math.PI / 1, 0, 2 * Math.PI);
ctx.fillStyle = "gainsboro";
ctx.fill();
ctx.closePath();
//swan #1 neck and head
ctx.beginPath();
ctx.line;
ctx.lineWidth = 9;
ctx.lineCap = "round";
ctx.bezierCurveTo(550, 620, 590, 450, 520, 520);
ctx.strokeStyle = "gainsboro";
ctx.stroke();
ctx.moveTo(490, 255);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.line;
ctx.lineWidth = 9;
ctx.lineCap = "round";
ctx.bezierCurveTo(540, 620, 590, 475, 520, 520);
ctx.strokeStyle = "gainsboro";
ctx.stroke();
ctx.moveTo(490, 255);
ctx.stroke();
ctx.closePath();
///nose
ctx.beginPath();
ctx.moveTo(513, 525);
ctx.lineTo(525, 511);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(513, 525);
ctx.lineTo(530, 518);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(520, 520, 2, 0, Math.PI * 2, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
//swan #1 leftside wing
ctx.beginPath();
ctx.ellipse(530, 600, 43, 23, Math.PI / 6, 0, 2 * Math.PI);
ctx.fillStyle = "gainsboro";
ctx.fill();
ctx.closePath();
//elephant1
//elephant #1 trunk
ctx.beginPath();
ctx.line;
ctx.lineWidth = 9;
ctx.lineCap = "round";
ctx.bezierCurveTo(560, 640, 590, 830, 520, 750);
ctx.strokeStyle = "silver";
ctx.stroke();
ctx.moveTo(490, 255);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.line;
ctx.lineWidth = 9;
ctx.lineCap = "round";
ctx.bezierCurveTo(555, 645, 585, 810, 520, 750);
ctx.strokeStyle = "silver";
ctx.stroke();
ctx.moveTo(490, 255);
ctx.stroke();
ctx.closePath();

//elephant #1 rightside ear
ctx.beginPath();
ctx.ellipse(590, 660, 50, 28, Math.PI / 1, 0, 2 * Math.PI);
ctx.fillStyle = "silver";
ctx.fill();
ctx.closePath();

//elephant #1 leftside ear
ctx.beginPath();
ctx.ellipse(530, 665, 43, 23, Math.PI / -5, 0, 2 * Math.PI);
ctx.fillStyle = "silver";
ctx.fill();
ctx.closePath();

//water
// ctx.beginPath();
// ctx.arc(100, 790, 30, 0, Math.PI * 2, false);
// ctx.fillStyle = "water";
// ctx.fill();
// ctx.closePath();

// house.beginPath();
// house.rect(370, 260, 400, 350);
// house.fillStyle = "lightSalmon";
// house.fill();
// house.closePath();

// face.beginPath();
// face.ellipse(440, 290, 100, 55, Math.PI / 2, 0, 2 * Math.PI);
// face.fillStyle = "bisque";
// face.fill();
// face.closePath();

// eyeLine.beginPath();
// eyeLine.line;
// eyeLine.lineWidth = 4;
// eyeLine.bezierCurveTo(470, 338, 390, 310, 335, 340);
// eyeLine.stroke();
// eyeLine.moveTo(490, 375);
// eyeLine.stroke();
// eyeLine.closePath();

// b.beginPath();
// b.moveTo(530, 550);
// b.lineTo(555, 645);
// b.strokeStyle = "black";
// b.lineWidth = 4;
// b.stroke();
// b.closePath();
