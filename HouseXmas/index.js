let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

//background
//sky
let sky = canvas.getContext("2d");
sky.beginPath();
sky.rect(0, 0, 2000, 1000);
sky.fillStyle = "lightSkyBlue";
sky.fill();
sky.closePath();
//grass
let grass = canvas.getContext("2d");
grass.beginPath();
grass.rect(0, 500, 2000, 500);
grass.fillStyle = "lightGreen";
grass.fill();
grass.closePath();
//weather
let weather = canvas.getContext("2d");
weather.beginPath();
weather.arc(25, 50, 70, 0, Math.PI * 2, true);
weather.fillStyle = "gold";
weather.fill();
weather.closePath();
weather.beginPath();
weather.moveTo(30, 150);
weather.bezierCurveTo(60, 220, 60, 130, 90, 210);
weather.lineWidth = 5;
weather.strokeStyle = "gold";
weather.stroke();
weather.closePath();
weather.beginPath();
weather.moveTo(75, 130);
weather.bezierCurveTo(100, 190, 120, 100, 150, 180);
weather.lineWidth = 5;
weather.strokeStyle = "gold";
weather.stroke();
weather.closePath();
weather.beginPath();
weather.moveTo(120, 100);
weather.bezierCurveTo(190, 150, 130, 80, 200, 120);
weather.lineWidth = 5;
weather.strokeStyle = "gold";
weather.stroke();
weather.closePath();
weather.beginPath();
weather.moveTo(120, 50);
weather.bezierCurveTo(210, 100, 120, 40, 220, 70);
weather.lineWidth = 5;
weather.strokeStyle = "gold";
weather.stroke();
weather.closePath();
//house
let house = canvas.getContext("2d");
house.beginPath();
house.rect(370, 260, 400, 350);
house.fillStyle = "lightSalmon";
house.fill();
house.closePath();
//house chimmney
let chimney = canvas.getContext("2d");
chimney.beginPath();
chimney.rect(675, 160, 35, 70);
chimney.fillStyle = "black";
chimney.fill();
chimney.closePath();
//houseRoof
let houseRoof = canvas.getContext("2d");
houseRoof.beginPath();
houseRoof.moveTo(780, 265);
houseRoof.lineTo(360, 265);
houseRoof.lineTo(565, 140);
houseRoof.fillStyle = "darkRed";
houseRoof.fill();
houseRoof.closePath();
//door
let door = canvas.getContext("2d");
door.beginPath();
door.rect(430, 470, 80, 140);
door.fillStyle = "darkGoldenRod";
door.fill();
door.closePath();
//doorWindow
let doorWindow = canvas.getContext("2d");
doorWindow.beginPath();
doorWindow.ellipse(470, 500, 15, 25, Math.PI / 2, 0, Math.PI * 2);
doorWindow.fillStyle = "lightYellow";
doorWindow.fill();
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();
//door window pattern
doorWindow.beginPath();
doorWindow.moveTo(495, 500);
doorWindow.lineTo(445, 500);
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();
doorWindow.beginPath();
doorWindow.moveTo(470, 485);
doorWindow.lineTo(470, 515);
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();
//doorknob
let doorKnob = canvas.getContext("2d");
doorKnob.beginPath();
doorKnob.arc(445, 545, 5, 0, Math.PI * 2, true);
doorKnob.fillStyle = "black";
doorKnob.fill();
doorKnob.closePath();

//window1
let window1 = canvas.getContext("2d");
window1.beginPath();
window1.rect(430, 310, 80, 80);
window1.fillStyle = "lightYellow";
window1.fill();
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//curtain for window one
//right side curtain
window1.beginPath();
window1.ellipse(508.8, 331, 20, 15, Math.PI / 2, 0, Math.PI * 1);
window1.fillStyle = "purple";
window1.fill();
window1.closePath();
window1.beginPath();
window1.ellipse(508.8, 370, 18, 10, Math.PI / 2, 0, Math.PI * 1);
window1.fillStyle = "purple";
window1.fill();
window1.closePath();
//left side curtain
window1.beginPath();
window1.ellipse(431, 331, 20, 15, Math.PI / 2, 0, Math.PI / 1, true);
window1.fillStyle = "purple";
window1.fill();
window1.closePath();
window1.beginPath();
window1.ellipse(431, 370, 18, 10, Math.PI / 2, 0, Math.PI / 1, true);
window1.fillStyle = "purple";
window1.fill();
window1.closePath();
//window one pattern
window1.beginPath();
window1.moveTo(430, 352);
window1.lineTo(510, 352);
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
window1.beginPath();
window1.moveTo(470, 310);
window1.lineTo(470, 390);
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//underWindow
window1.beginPath();
window1.rect(425, 390, 90, 10);
window1.fillStyle = "grey";
window1.fill();
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//
//
//window2
let window2 = canvas.getContext("2d");
window2.beginPath();
window2.rect(610, 310, 80, 80);
window2.fillStyle = "lightYellow";
window2.fill();
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//curtain for window 2
//right curtain
window2.beginPath();
window2.ellipse(689, 331, 20, 15, Math.PI / 2, 0, Math.PI * 1);
window2.fillStyle = "purple";
window2.fill();
window2.closePath();
window2.beginPath();
window2.ellipse(689, 370, 18, 10, Math.PI / 2, 0, Math.PI * 1);
window2.fillStyle = "purple";
window2.fill();
window2.closePath();
//left curtain
window2.beginPath();
window2.ellipse(611, 331, 20, 15, Math.PI / 2, 0, Math.PI / 1, true);
window2.fillStyle = "purple";
window2.fill();
window2.closePath();
window2.beginPath();
window2.ellipse(611, 370, 18, 10, Math.PI / 2, 0, Math.PI / 1, true);
window2.fillStyle = "purple";
window2.fill();
window2.closePath();
//window 2 pattern
window2.beginPath();
window2.moveTo(610, 352);
window2.lineTo(690, 352);
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
window2.beginPath();
window2.moveTo(650, 310);
window2.lineTo(650, 390);
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//underWindow2
window2.beginPath();
window2.rect(605, 390, 90, 10);
window2.fillStyle = "grey";
window2.fill();
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//
//
//window3
let window3 = canvas.getContext("2d");
window3.beginPath();
window3.rect(610, 470, 80, 80);
window3.fillStyle = "lightYellow";
window3.fill();
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
//curtain for window3
//right curtain
window3.beginPath();
window3.ellipse(689, 491, 20, 15, Math.PI / 2, 0, Math.PI * 1);
window3.fillStyle = "purple";
window3.fill();
window3.closePath();
window3.beginPath();
window3.ellipse(689, 530, 18, 10, Math.PI / 2, 0, Math.PI * 1);
window3.fillStyle = "purple";
window3.fill();
window3.closePath();
//left curtain
window3.beginPath();
window3.ellipse(611, 491, 20, 15, Math.PI / 2, 0, Math.PI / 1, true);
window3.fillStyle = "purple";
window3.fill();
window3.closePath();
window3.beginPath();
window3.ellipse(611, 530, 18, 10, Math.PI / 2, 0, Math.PI / 1, true);
window3.fillStyle = "purple";
window3.fill();
window3.closePath();
//window 3 pattern
window3.beginPath();
window3.moveTo(610, 510);
window3.lineTo(690, 510);
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
window3.beginPath();
window3.moveTo(650, 550);
window3.lineTo(650, 470);
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
//underWindow3
window3.beginPath();
window3.rect(605, 550, 90, 10);
window3.fillStyle = "grey";
window3.fill();
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();

//tree
//trunk
let trunk = canvas.getContext("2d");
trunk.beginPath();
trunk.rect(5, 650, 50, 260);
trunk.fillStyle = "saddleBrown";
trunk.fill();
trunk.closePath();
//tree leaves
let leaves = canvas.getContext("2d");
leaves.beginPath();
leaves.arc(80, 650, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
leaves.beginPath();
leaves.arc(80, 600, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
leaves.beginPath();
leaves.arc(0, 650, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
leaves.beginPath();
leaves.arc(0, 590, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
leaves.beginPath();
leaves.arc(25, 540, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
leaves.beginPath();
leaves.arc(50, 550, 70, 0, Math.PI * 2, true);
leaves.fillStyle = "darkGreen";
leaves.fill();
leaves.closePath();
