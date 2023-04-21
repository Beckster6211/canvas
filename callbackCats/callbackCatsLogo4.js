let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.bezierCurveTo(260, 170, 170, 260, 242, 320);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(258, 170);
ctx.lineTo(310, 230);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(308, 230);
ctx.lineTo(410, 230);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(410, 230);
ctx.lineTo(460, 170);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(459, 170, 550, 260, 500, 320);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

//face
//side
ctx.beginPath();
ctx.moveTo(240, 320);
ctx.lineTo(250, 320);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(501, 320);
ctx.lineTo(490, 320);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(248, 320);
ctx.lineTo(248, 352);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(491, 320);
ctx.lineTo(490, 351);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(249, 350);
ctx.lineTo(320, 440);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(490, 351);
ctx.lineTo(420, 440);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(320, 440);
ctx.lineTo(420, 440);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

//nose
ctx.beginPath();
ctx.ellipse(370, 390, 6, 10, Math.PI / 2, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(370, 390);
ctx.lineTo(370, 410);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(370, 410, 360, 420, 350, 410);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(370, 410, 380, 420, 390, 410);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(250, 230, 250, 150, 290, 250);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(470, 230, 470, 150, 430, 250);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(310, 340, 10, 0, Math.PI * 2, true);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.bezierCurveTo(330, 343, 315, 312, 280, 330);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(420, 340, 10, 0, Math.PI * 2, true);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.bezierCurveTo(450, 328, 409, 315, 400, 343);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(330, 365);
ctx.lineTo(300, 365);
ctx.moveTo(330, 375);
ctx.lineTo(300, 375);
ctx.moveTo(330, 385);
ctx.lineTo(300, 385);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(440, 365);
ctx.lineTo(410, 365);
ctx.moveTo(440, 375);
ctx.lineTo(410, 375);
ctx.moveTo(440, 385);
ctx.lineTo(410, 385);
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(150, 170, 70, 280, 150, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 8;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(575, 170, 670, 280, 575, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 8;
ctx.stroke();
ctx.closePath();
