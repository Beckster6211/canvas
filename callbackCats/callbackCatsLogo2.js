let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let C = canvas.getContext("2d");
let backLeg = canvas.getContext("2d");
let body = canvas.getContext("2d");
let frontLeg = canvas.getContext("2d");
let ear = canvas.getContext("2d");
let head = canvas.getContext("2d");

//c of cats
C.beginPath();
C.bezierCurveTo(80, 160, 100, 110, 160, 150);
C.strokeStyle = "black";
C.lineWidth = 10;
C.stroke();
C.closePath();
C.beginPath();
C.bezierCurveTo(80, 160, 60, 200, 80, 290);
C.strokeStyle = "black";
C.lineWidth = 10;
C.stroke();
C.closePath();
C.beginPath();
C.bezierCurveTo(80, 288, 110, 340, 160, 300);
C.strokeStyle = "black";
C.lineWidth = 10;
C.stroke();
C.closePath();

//back leg
backLeg.beginPath();
backLeg.bezierCurveTo(180, 250, 200, 210, 215, 250);
backLeg.strokeStyle = "black";
backLeg.lineWidth = 5;
backLeg.stroke();
backLeg.closePath();
backLeg.beginPath();
backLeg.bezierCurveTo(215, 250, 220, 260, 190, 300);
backLeg.strokeStyle = "black";
backLeg.lineWidth = 5;
backLeg.stroke();
backLeg.closePath();
backLeg.beginPath();
backLeg.bezierCurveTo(190, 300, 150, 340, 270, 320);
backLeg.strokeStyle = "black";
backLeg.lineWidth = 5;
backLeg.stroke();
backLeg.closePath();
backLeg.beginPath();
backLeg.bezierCurveTo(270, 320, 305, 300, 235, 300);
backLeg.strokeStyle = "black";
backLeg.lineWidth = 5;
backLeg.stroke();
backLeg.closePath();
backLeg.beginPath();
backLeg.bezierCurveTo(235, 300, 315, 305, 305, 260);
backLeg.strokeStyle = "black";
backLeg.lineWidth = 5;
backLeg.stroke();
backLeg.closePath();

//body of cat
body.beginPath();
body.bezierCurveTo(260, 270, 250, 220, 300, 220);
body.strokeStyle = "black";
body.lineWidth = 5;
body.stroke();
body.closePath();
body.beginPath();
body.bezierCurveTo(300, 220, 360, 210, 348, 270);
body.strokeStyle = "black";
body.lineWidth = 5;
body.stroke();
body.closePath();

//front leg of cat
frontLeg.beginPath();
frontLeg.bezierCurveTo(348, 270, 340, 320, 390, 315);
frontLeg.strokeStyle = "black";
frontLeg.lineWidth = 5;
frontLeg.stroke();
frontLeg.closePath();
frontLeg.beginPath();
frontLeg.bezierCurveTo(390, 315, 400, 315, 440, 315);
frontLeg.strokeStyle = "black";
frontLeg.lineWidth = 5;
frontLeg.stroke();
frontLeg.closePath();
frontLeg.beginPath();
frontLeg.bezierCurveTo(430, 315, 450, 320, 450, 300);
frontLeg.strokeStyle = "black";
frontLeg.lineWidth = 5;
frontLeg.stroke();
frontLeg.closePath();
frontLeg.beginPath();
frontLeg.bezierCurveTo(450, 300, 450, 280, 430, 285);
frontLeg.strokeStyle = "black";
frontLeg.lineWidth = 5;
frontLeg.stroke();
frontLeg.closePath();
frontLeg.beginPath();
frontLeg.bezierCurveTo(440, 283, 390, 300, 395, 255);
frontLeg.strokeStyle = "black";
frontLeg.lineWidth = 5;
frontLeg.stroke();
frontLeg.closePath();

//ear of cat
ear.beginPath();
ear.bezierCurveTo(395, 260, 390, 200, 460, 135);
ear.strokeStyle = "black";
ear.lineWidth = 5;
ear.stroke();
ear.closePath();
ear.beginPath();
ear.bezierCurveTo(460, 135, 440, 180, 460, 175);
ear.strokeStyle = "black";
ear.lineWidth = 5;
ear.stroke();
ear.closePath();

//head of cat
head.beginPath();
head.bezierCurveTo(460, 175, 490, 170, 495, 200);
head.strokeStyle = "black";
head.lineWidth = 5;
head.stroke();
head.closePath();
head.beginPath();
head.bezierCurveTo(495, 200, 515, 270, 450, 260);
head.strokeStyle = "black";
head.lineWidth = 5;
head.stroke();
head.closePath();
head.beginPath();
head.bezierCurveTo(450, 260, 430, 260, 435, 230);
head.strokeStyle = "black";
head.lineWidth = 5;
head.stroke();
head.closePath();
