let canvas = document.querySelector("canvas");
//let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//left ear
let leftEar = canvas.getContext("2d");

leftEar.beginPath();
leftEar.arc(200, 150, 130, 0, Math.PI * 2);
leftEar.fillStyle = "black";
leftEar.fill();
leftEar.closePath();

//right ear
let rightEar = canvas.getContext("2d");

rightEar.beginPath();
rightEar.arc(600, 150, 130, 0, Math.PI * 2);
rightEar.fillStyle = "black";
rightEar.fill();
rightEar.closePath();

//head background
let headBackground = canvas.getContext("2d");

headBackground.beginPath();
headBackground.arc(400, 360, 200, 0, Math.PI * 2);
headBackground.fillStyle = "black";
headBackground.fill();
headBackground.closePath();

//face
let face = canvas.getContext("2d");

face.beginPath();
face.arc(400, 380, 150, 0, Math.PI * 1, false);
face.fillStyle = "bisque";
face.fill();
face.closePath();
face.beginPath();
face.ellipse(440, 290, 100, 55, Math.PI / 2, 0, 2 * Math.PI);
face.fillStyle = "bisque";
face.fill();
face.closePath();
face.beginPath();
face.ellipse(360, 290, 100, 55, Math.PI / 2, 0, 2 * Math.PI);
face.fillStyle = "bisque";
face.fill();
face.closePath();
face.closePath();
face.beginPath();
face.arc(290, 380, 45, 0, Math.PI * 2, false);
face.fillStyle = "bisque";
face.fill();
face.closePath();
face.beginPath();
face.arc(510, 380, 45, 0, Math.PI * 2, false);
face.fillStyle = "bisque";
face.fill();
face.closePath();

//left eye
let leftEye = canvas.getContext("2d");

leftEye.beginPath();
leftEye.ellipse(370, 275, 55, 30, Math.PI / 2, 0, 2 * Math.PI);
leftEye.fillStyle = "white";
leftEye.fill();
leftEye.lineWidth = 4;
leftEye.strokeStyle = "black";
leftEye.stroke();
leftEye.closePath();
leftEye.beginPath();
leftEye.ellipse(370, 305, 22, 12, Math.PI / 2, 0, 2 * Math.PI);
leftEye.fillStyle = "black";
leftEye.fill();
leftEye.closePath();

//right eye
let rightEye = canvas.getContext("2d");

rightEye.beginPath();
rightEye.ellipse(430, 275, 55, 30, Math.PI / 2, 0, 2 * Math.PI);
rightEye.fillStyle = "white";
rightEye.fill();
rightEye.lineWidth = 4;
rightEye.strokeStyle = "black";
rightEye.stroke();
rightEye.closePath();
rightEye.beginPath();
rightEye.ellipse(430, 305, 22, 12, Math.PI / 2, 0, 2 * Math.PI);
rightEye.fillStyle = "black";
rightEye.fill();
rightEye.closePath();

//mouth
let mouth = canvas.getContext("2d");

mouth.beginPath();
mouth.arc(400, 420, 85, 00, Math.PI * 2, true);
mouth.fillStyle = "black";
mouth.fill();
mouth.closePath();
mouth.beginPath();
mouth.ellipse(400, 380, 55, 120, Math.PI / 2, 0, 2 * Math.PI);
mouth.fillStyle = "bisque";
mouth.fill();
mouth.closePath();
mouth.beginPath();
mouth.line;
mouth.lineWidth = 4;
mouth.bezierCurveTo(320, 425, 275, 385, 290, 375);
mouth.strokeStyle = "red";
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.line;
mouth.lineWidth = 4;
mouth.bezierCurveTo(270, 395, 275, 370, 305, 375);
mouth.stroke();
mouth.moveTo(490, 375);
mouth.bezierCurveTo(490, 375, 520, 370, 525, 395);
mouth.stroke();
mouth.closePath();
mouth.beginPath();
mouth.line;
mouth.lineWidth = 4;
mouth.bezierCurveTo(480, 425, 525, 385, 510, 378);
mouth.stroke();
mouth.closePath();

//eye line
let eyeLine = canvas.getContext("2d");

eyeLine.beginPath();
eyeLine.line;
eyeLine.lineWidth = 4;
eyeLine.bezierCurveTo(470, 338, 390, 310, 335, 340);
eyeLine.stroke();
eyeLine.moveTo(490, 375);
eyeLine.stroke();
eyeLine.closePath();

//nose
let nose = canvas.getContext("2d");

nose.beginPath();
nose.ellipse(400, 375, 20, 40, Math.PI / 2, 0, 2 * Math.PI);
nose.fillStyle = "black";
nose.fill();
nose.closePath();

//tongue
let tongue = canvas.getContext("2d");

tongue.beginPath();
tongue.ellipse(390, 485, 15, 35, Math.PI / -2.1, 1, 3 * Math.PI);
tongue.fillStyle = "pink";
tongue.fill();
tongue.closePath();
tongue.beginPath();
tongue.ellipse(410, 485, 15, 35, Math.PI / 2.1, 1, 3 * Math.PI);
tongue.fillStyle = "pink";
tongue.fill();
tongue.closePath();
tongue.beginPath();
tongue.line;
tongue.lineWidth = 4;
tongue.bezierCurveTo(385, 465, 405, 465, 405, 490);
tongue.strokeStyle = "black";
tongue.stroke();
tongue.closePath();

//b of BLJ
let b = canvas.getContext("2d");

b.beginPath();
b.moveTo(530, 550);
b.lineTo(555, 645);
b.strokeStyle = "black";
b.lineWidth = 4;
b.stroke();
b.closePath();
b.beginPath();
b.moveTo(530, 550);
b.lineTo(565, 570);
b.strokeStyle = "black";
b.lineWidth = 4;
b.stroke();
b.closePath();
b.beginPath();
b.moveTo(545, 600);
b.lineTo(565, 570);
b.strokeStyle = "black";
b.lineWidth = 4;
b.stroke();
b.closePath();
b.beginPath();
b.moveTo(545, 600);
b.lineTo(575, 610);
b.strokeStyle = "black";
b.lineWidth = 4;
b.stroke();
b.closePath();
b.beginPath();
b.moveTo(555, 645);
b.lineTo(575, 610);
b.strokeStyle = "black";
b.lineWidth = 4;
b.stroke();
b.closePath();

//l of BLJ
let l = canvas.getContext("2d");

l.beginPath();
l.moveTo(563, 550);
l.lineTo(584, 635);
l.strokeStyle = "black";
l.lineWidth = 4;
l.stroke();
l.closePath();
l.beginPath();
l.moveTo(600, 600);
l.lineTo(584, 635);
l.strokeStyle = "black";
l.lineWidth = 4;
l.stroke();
l.closePath();
l.beginPath();
l.moveTo(600, 600);
l.lineTo(625, 628);
l.strokeStyle = "black";
l.lineWidth = 4;
l.stroke();
l.closePath();

//j of BLJ
let j = canvas.getContext("2d");

j.beginPath();
j.moveTo(600, 600);
j.lineTo(625, 628);
j.strokeStyle = "black";
j.lineWidth = 4;
j.stroke();
j.closePath();
j.beginPath();
j.moveTo(620, 545);
j.lineTo(627, 630);
j.strokeStyle = "black";
j.lineWidth = 4;
j.stroke();
j.closePath();
j.beginPath();
j.moveTo(528, 550);
j.lineTo(680, 545);
j.strokeStyle = "black";
j.lineWidth = 4;
j.stroke();
j.closePath();
