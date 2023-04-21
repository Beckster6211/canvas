let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let ears = canvas.getContext("2d");
let face = canvas.getContext("2d");
let nose = canvas.getContext("2d");
let mouth = canvas.getContext("2d");
let eyes = canvas.getContext("2d");
let fur = canvas.getContext("2d");
let dots = canvas.getContext("2d");
let whiskers = canvas.getContext("2d");
let outline = canvas.getContext("2d");
let cheeks = canvas.getContext("2d");
//ears
//ear1

//
ears.beginPath();
ears.moveTo(560, 210);
ears.lineTo(460, 300);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.lineTo(565, 350);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.moveTo(565, 350);
ears.lineTo(560, 210);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.fillStyle = "tomato";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(560, 210);
ears.lineTo(515, 250);
ears.lineTo(562, 270);
ears.fillStyle = "whiteSmoke";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(545, 250);
ears.lineTo(475, 310);
ears.lineTo(550, 345);
ears.fillStyle = "pink";
ears.fill();
ears.closePath();
//ear2
ears.beginPath();
ears.moveTo(170, 310);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.lineTo(220, 440);
ears.strokeStyle = "black";
ears.lineWidth = 3;
ears.stroke();
ears.lineTo(295, 355);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.moveTo(295, 355);
ears.lineTo(170, 310);
ears.strokeStyle = "black";
ears.lineWidth = 4;
ears.stroke();
ears.fillStyle = "tomato";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(170, 310);
ears.lineTo(223, 329);
ears.lineTo(191, 365);
ears.fillStyle = "whiteSmoke";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(195, 335);
ears.lineTo(288, 367);
ears.lineTo(232, 430);
ears.fillStyle = "pink";
ears.fill();
ears.closePath();

//face background
face.beginPath();
face.ellipse(410, 460, 160, 200, Math.PI / 2.5, 0, Math.PI * 2);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 5;
// ctx.stroke();
face.fillStyle = "lightSalmon";
face.fill();
face.closePath();

//nose background
nose.beginPath();
nose.ellipse(429, 540, 45, 100, Math.PI / 2.5, 0, Math.PI * 2);
nose.fillStyle = "white";
nose.fill();
nose.closePath();
nose.beginPath();
nose.ellipse(390, 485, 40, 60, Math.PI / 1.3, 0, Math.PI * 2);
nose.fillStyle = "white";
nose.fill();
nose.closePath();
nose.beginPath();
nose.ellipse(415, 475, 40, 60, Math.PI * -2.0, 0, Math.PI * 2);
nose.fillStyle = "white";
nose.fill();
nose.closePath();
nose.beginPath();
nose.ellipse(390, 442, 25, 49, Math.PI / 2.6, 0, Math.PI * 2);
nose.fillStyle = "white";
nose.fill();
nose.closePath();

//nose
nose.beginPath();
nose.moveTo(415, 510);
nose.strokeStyle = "black";
nose.lineWidth = 3
nose.stroke();
nose.lineTo(430, 425);
nose.strokeStyle = "black";
nose.lineWidth = 3
nose.stroke();
nose.lineTo(350, 455);
nose.strokeStyle = "black";
nose.lineWidth = 3
nose.stroke();
nose.moveTo(415, 510);
nose.lineTo(350, 455);
nose.strokeStyle = "black";
nose.lineWidth = 3
nose.stroke();
nose.fillStyle = "pink";
nose.fill();
nose.closePath();

//mouth
mouth.beginPath();
mouth.moveTo(415,510);
mouth.lineTo(427,545);
mouth.strokeStyle = "black";
mouth.lineWidth = 3
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.bezierCurveTo(427, 545, 500, 570, 510, 500);
mouth.strokeStyle = "black";
mouth.lineWidth = 3
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.bezierCurveTo(427, 545, 405, 600, 340, 560);
mouth.strokeStyle = "black";
mouth.lineWidth = 3
mouth.stroke();
mouth.closePath();

//eyes 
//eye1
eyes.beginPath();
eyes.bezierCurveTo(290, 435, 300, 370, 365, 400);
eyes.strokeStyle = "black";
eyes.lineWidth = 3
eyes.stroke();
eyes.closePath();
//eye2
eyes.beginPath();
eyes.bezierCurveTo(400, 390, 420, 330, 475, 365);
eyes.strokeStyle = "black";
eyes.lineWidth = 3
eyes.stroke();
eyes.closePath();

//fur pattern
//top of head

fur.beginPath();
fur.moveTo(370,365);
fur.lineTo(338,316);
fur.lineTo(363,308);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(350,365);
fur.lineTo(315,328);
fur.lineTo(332,320);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(386,352);
fur.lineTo(370,305);
fur.lineTo(390,300);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();

//side1
fur.beginPath();
fur.moveTo(300,520);
fur.lineTo(241,560);
fur.lineTo(223,530);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(275,510);
fur.lineTo(221,525);
fur.lineTo(215,500);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(300,540);
fur.lineTo(260,580);
fur.lineTo(245,565);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();

//side2
fur.beginPath();
fur.moveTo(535,437);
fur.lineTo(605,435);
fur.lineTo(603,408);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(545,417);
fur.lineTo(600,400);
fur.lineTo(590,375);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();
fur.beginPath();
fur.moveTo(560,450);
fur.lineTo(604,465);
fur.lineTo(605,443);
fur.fillStyle = "tomato"
fur.fill();
fur.closePath();

//dots
//side1
dots.beginPath();
dots.arc(370, 550, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(375, 530, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(390, 560, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(390, 540, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(395, 520, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(405, 535, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(405, 550, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
//side2
dots.beginPath();
dots.arc(470, 500, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(445, 530, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(470, 535, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(480, 520, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(435, 510, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(455, 515, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();
dots.beginPath();
dots.arc(465, 523, 2, 0, Math.PI * 2, true);
dots.fillStyle = "black";
dots.fill();
dots.closePath();

//whiskers
//side1
whiskers.beginPath();
whiskers.bezierCurveTo(390, 535, 260, 500, 100, 600);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(390, 535, 280, 520, 120, 630);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(390, 535, 300, 540, 140, 670);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();

//side2
whiskers.beginPath();
whiskers.bezierCurveTo(460, 515, 510, 440, 700, 410);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(460, 515, 530, 460, 700, 440);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(460, 515, 550, 480, 700, 480);
whiskers.strokeStyle = "black";
whiskers.lineWidth = 3
whiskers.stroke();
whiskers.closePath();

//faceearline
outline.beginPath();
outline.bezierCurveTo(260, 370, 350, 270, 503, 305);
outline.lineWidth = 3;
outline.strokeStyle = "black";
outline.stroke();
outline.closePath();

//cheeks/brackets
cheeks.beginPath();
cheeks.bezierCurveTo(215, 465, 200, 565, 310, 610);
cheeks.lineWidth = 8;
cheeks.strokeStyle = "black";
cheeks.stroke();
cheeks.closePath();
//
cheeks.beginPath();
cheeks.bezierCurveTo(580, 360, 640, 445, 570, 540);
cheeks.lineWidth = 8;
cheeks.strokeStyle = "black";
cheeks.stroke();
cheeks.closePath();