let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let face = canvas.getContext("2d");
let nose = canvas.getContext("2d");
let mouth = canvas.getContext("2d");
let ears = canvas.getContext("2d");
let eyes = canvas.getContext("2d");
let whiskers = canvas.getContext("2d");
let phone = canvas.getContext("2d");
let words = canvas.getContext("2d");

words.beginPath();
words.font = "40px Comic Sans MS";
words.fillStyle = "black";
words.fillText("Callback Cats", 280, 140);
words.closePath();

//faceBackground
face.beginPath();
face.arc(400, 340, 170, 0, Math.PI * 2, true);
face.fillStyle = "orange";
face.fill();
face.closePath();

//ear1
ears.beginPath();
ears.moveTo(200, 100);
ears.lineTo(240, 285);
ears.lineTo(320, 190);
ears.fillStyle = "orange";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(220, 130);
ears.lineTo(250, 255);
ears.lineTo(310, 200);
ears.fillStyle = "pink";
ears.fill();
ears.closePath();

//ear2
ears.beginPath();
ears.moveTo(600, 100);
ears.lineTo(560, 285);
ears.lineTo(480, 190);
ears.fillStyle = "orange";
ears.fill();
ears.closePath();
//
ears.beginPath();
ears.moveTo(580, 130);
ears.lineTo(550, 255);
ears.lineTo(490, 200);
ears.fillStyle = "pink";
ears.fill();
ears.closePath();

//nose background
nose.beginPath();
nose.arc(400, 400, 70, 0, Math.PI * 2, true);
nose.fillStyle = "beige";
nose.fill();
nose.closePath();

//nose
nose.beginPath();
nose.moveTo(400, 400);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3
// ctx.stroke();
nose.lineTo(430, 350);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3
// ctx.stroke();
nose.lineTo(370, 350);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3
// ctx.stroke();
nose.moveTo(415, 510);
nose.lineTo(350, 455);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3
// ctx.stroke();
nose.fillStyle = "pink";
nose.fill();
nose.closePath();

//mouth lines
mouth.beginPath();
mouth.moveTo(400, 395);
mouth.lineTo(400, 425);
mouth.strokeStyle = "black";
mouth.lineWidth = 3;
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.bezierCurveTo(350, 420, 370, 445, 401, 425);
mouth.strokeStyle = "black";
mouth.lineWidth = "3";
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.bezierCurveTo(450, 420, 440, 445, 400, 425);
mouth.strokeStyle = "black";
mouth.lineWidth = "3";
mouth.stroke();
mouth.closePath();

//eye1
eyes.beginPath();
eyes.ellipse(320, 290, 25, 40, Math.PI / -3, 0, Math.PI * 2);
eyes.fillStyle = "black";
eyes.fill();
eyes.closePath();
eyes.beginPath();
eyes.ellipse(320, 290, 20, 35, Math.PI / -3, 0, Math.PI * 2);
eyes.fillStyle = "white";
eyes.fill();
eyes.closePath();
eyes.beginPath();
eyes.ellipse(320, 290, 10, 20, Math.PI / -1, 0, Math.PI * 2);
eyes.fillStyle = "green";
eyes.fill();
eyes.closePath();

//eye2
eyes.beginPath();
eyes.ellipse(480, 290, 25, 40, Math.PI / 3, 0, Math.PI * 2);
eyes.fillStyle = "black";
eyes.fill();
eyes.closePath();
eyes.beginPath();
eyes.ellipse(480, 290, 20, 35, Math.PI / 3, 0, Math.PI * 2);
eyes.fillStyle = "white";
eyes.fill();
eyes.closePath();
eyes.beginPath();
eyes.ellipse(480, 290, 10, 20, Math.PI / -1, 0, Math.PI * 2);
eyes.fillStyle = "green";
eyes.fill();
eyes.closePath();

//whiskers
whiskers.beginPath();
whiskers.bezierCurveTo(380, 410, 360, 375, 240, 380);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(380, 410, 370, 385, 240, 400);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(380, 410, 375, 395, 240, 420);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();
//
whiskers.beginPath();
whiskers.bezierCurveTo(425, 410, 450, 375, 550, 380);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(425, 410, 450, 385, 550, 400);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();
whiskers.beginPath();
whiskers.bezierCurveTo(425, 410, 450, 395, 550, 420);
whiskers.strokeStyle = "black";
whiskers.lineWidth = "3";
whiskers.stroke();
whiskers.closePath();

//phone

phone.beginPath();
phone.moveTo(550, 185);
phone.lineTo(535, 225);
phone.lineWidth = 5;
phone.strokeStyle = "black";
phone.stroke();
phone.moveTo(548, 185)
phone.bezierCurveTo(548, 185, 650, 200, 650, 350);
phone.strokeStyle = "black";
phone.lineWidth = 5;
phone.stroke();
phone.moveTo(650, 350);
phone.bezierCurveTo(650, 350, 650, 500, 500, 450);
phone.strokeStyle = "black";
phone.lineWidth = 5;
phone.stroke();
phone.moveTo(500, 452);
phone.lineTo(513, 410);
phone.lineWidth = 5;
phone.strokeStyle = "black";
phone.stroke();
phone.moveTo(513, 413);
phone.bezierCurveTo(513, 413, 580, 450, 595, 350);
phone.lineWidth = 5;
phone.strokeStyle = "black";
phone.stroke();
phone.moveTo(595, 350);
phone.bezierCurveTo(595, 350, 610, 250, 535, 223);
phone.lineWidth = 5;
phone.strokeStyle = "black";
phone.stroke();
//
//
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(550, 220, 15, 25, Math.PI / 3, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(540, 205, 18, 25, Math.PI / -1.1, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(555, 195, 15, 25, Math.PI / -6, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(510, 440, 15, 25, Math.PI / 3, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(505, 425, 18, 25, Math.PI / -1.1, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(515, 415, 15, 25, Math.PI / -6, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(545, 440, 20, 35, Math.PI / -2, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(580, 430, 25, 40, Math.PI / 3, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(610, 400, 30, 60, Math.PI / -1.2, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(620, 370, 30, 60, Math.PI / -1.1, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(620, 315, 25, 60, Math.PI / 1, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(610, 270, 25, 50, Math.PI / 1.1, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.ellipse(590, 235, 25, 50, Math.PI / 1.3, 0, Math.PI * 2);
// ctx.fillStyle = "grey";
// ctx.fill();
// ctx.closePath();
