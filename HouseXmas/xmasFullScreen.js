let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

//background
//sky
let sky = canvas.getContext("2d");
sky.beginPath();
sky.rect(0, 0, 2000, 1000);
sky.fillStyle = "midnightBlue";
sky.fill();
sky.closePath();
//grass
let grass = canvas.getContext("2d");
grass.beginPath();
grass.rect(0, 500, 2000, 500);
grass.fillStyle = "seaGreen";
grass.fill();
grass.closePath();
//weather
//stars
let stars = canvas.getContext("2d");
stars.beginPath();
stars.arc(40, 30, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1850, 30, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(30, 130, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1840, 130, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(150, 50, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1720, 50, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(850, 130, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1150, 130, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(750, 30, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(950, 30, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(370, 60, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1270, 60, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(550, 80, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(420, 145, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(200, 115, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(300, 190, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(90, 225, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(190, 287, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(300, 367, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(60, 407, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(900, 457, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(810, 425, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1855, 320, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1755, 380, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(855, 320, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1760, 230, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(760, 230, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1560, 230, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(560, 230, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(410, 300, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1410, 300, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(510, 450, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1310, 450, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(610, 370, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1210, 370, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(680, 150, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1280, 200, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();
stars.beginPath();
stars.arc(1480, 120, 1, 0, Math.PI * 2, true);
stars.fillStyle = "yellow";
stars.fill();
stars.closePath();

//
//house
let house = canvas.getContext("2d");
house.beginPath();
house.rect(720, 260, 400, 350);
house.fillStyle = "lightSalmon";
house.fill();
house.closePath();
//
//smoke
let smoke = canvas.getContext("2d");
smoke.beginPath();
smoke.arc(1043, 150, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1035, 135, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1045, 125, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1030, 115, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1040, 100, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1035, 80, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1025, 60, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1035, 40, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1030, 20, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
smoke.beginPath();
smoke.arc(1020, 10, 15, 0, Math.PI * 2, false);
smoke.fillStyle = "grey";
smoke.fill();
smoke.closePath();
//
//house chimmney
let chimney = canvas.getContext("2d");
chimney.beginPath();
chimney.rect(1025, 160, 35, 70);
chimney.fillStyle = "black";
chimney.fill();
chimney.closePath();
//
//houseRoof
let houseRoof = canvas.getContext("2d");
houseRoof.beginPath();
houseRoof.moveTo(1130, 265);
houseRoof.lineTo(710, 265);
houseRoof.lineTo(915, 140);
houseRoof.fillStyle = "darkRed";
houseRoof.fill();
houseRoof.closePath();
//

//
//door
let door = canvas.getContext("2d");
door.beginPath();
door.rect(780, 470, 80, 140);
door.fillStyle = "darkGoldenRod";
door.fill();
door.closePath();
//
//doorWindow
let doorWindow = canvas.getContext("2d");
doorWindow.beginPath();
doorWindow.ellipse(820, 500, 15, 25, Math.PI / 2, 0, Math.PI * 2);
doorWindow.fillStyle = "lightYellow";
doorWindow.fill();
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();
//door window pattern
doorWindow.beginPath();
doorWindow.moveTo(845, 500);
doorWindow.lineTo(795, 500);
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();
doorWindow.beginPath();
doorWindow.moveTo(820, 485);
doorWindow.lineTo(820, 515);
doorWindow.lineWidth = 3;
doorWindow.strokeStyle = "black";
doorWindow.stroke();
doorWindow.closePath();

//wreath
let wreath = canvas.getContext("2d");
wreath.beginPath();
wreath.arc(820, 525, 8, 0, Math.PI * 2, true);
wreath.lineWidth = "4";
wreath.strokeStyle = "green";
wreath.stroke();
wreath.closePath();
wreath.beginPath();
wreath.arc(820, 535, 3, 0, Math.PI * 2, true);
wreath.fillStyle = "red";
wreath.fill();
wreath.closePath();
wreath.beginPath();
wreath.moveTo(820, 535);
wreath.lineTo(815, 540);
wreath.moveTo(820, 535);
wreath.lineTo(825, 540);
wreath.lineWidth = 3;
wreath.strokeStyle = "red";
wreath.stroke();
wreath.closePath();

//doorknob
let doorKnob = canvas.getContext("2d");
doorKnob.beginPath();
doorKnob.arc(795, 545, 5, 0, Math.PI * 2, true);
doorKnob.fillStyle = "black";
doorKnob.fill();
doorKnob.closePath();

//window1
let window1 = canvas.getContext("2d");
window1.beginPath();
window1.rect(780, 310, 80, 80);
window1.fillStyle = "lightYellow";
window1.fill();
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//curtain for window one
window1.beginPath();
window1.rect(782, 311, 76, 75);
window1.fillStyle = "purple";
window1.fill();
window1.closePath();
//
//window one pattern
window1.beginPath();
window1.moveTo(780, 352);
window1.lineTo(860, 352);
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
window1.beginPath();
window1.moveTo(820, 310);
window1.lineTo(820, 390);
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//underWindow
window1.beginPath();
window1.rect(775, 390, 90, 10);
window1.fillStyle = "grey";
window1.fill();
window1.lineWidth = 3;
window1.strokeStyle = "black";
window1.stroke();
window1.closePath();
//
//snow window 1
let snow = canvas.getContext("2d");
snow.beginPath();
snow.arc(780, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(785, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(790, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(795, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(800, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(805, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(810, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(815, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(820, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(825, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(830, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(835, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(840, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(845, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(850, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(855, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(860, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
//
//
//window2
let window2 = canvas.getContext("2d");
window2.beginPath();
window2.rect(960, 310, 80, 80);
window2.fillStyle = "lightYellow";
window2.fill();
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//curtain for window 2
window2.beginPath();
window2.rect(962, 311, 76, 75);
window2.fillStyle = "purple";
window2.fill();
window2.closePath();
//
//window 2 pattern
window2.beginPath();
window2.moveTo(960, 352);
window2.lineTo(1040, 352);
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
window2.beginPath();
window2.moveTo(1000, 310);
window2.lineTo(1000, 390);
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//underWindow2
window2.beginPath();
window2.rect(955, 390, 90, 10);
window2.fillStyle = "grey";
window2.fill();
window2.lineWidth = 3;
window2.strokeStyle = "black";
window2.stroke();
window2.closePath();
//
//snow window 2
snow.beginPath();
snow.arc(960, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(965, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(970, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(975, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(980, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(985, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(990, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(995, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1000, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1005, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1010, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1015, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1020, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1025, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1030, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1035, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1040, 387, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
//
//
//window3
let window3 = canvas.getContext("2d");
window3.beginPath();
window3.rect(960, 470, 80, 80);
window3.fillStyle = "lightYellow";
window3.fill();
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
//curtain for window3
window3.beginPath();
window3.rect(962, 471, 76, 75);
window3.fillStyle = "purple";
window3.fill();
window3.closePath();
//
//window 3 pattern
window3.beginPath();
window3.moveTo(960, 510);
window3.lineTo(1040, 510);
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
window3.beginPath();
window3.moveTo(1000, 550);
window3.lineTo(1000, 470);
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
//underWindow3
window3.beginPath();
window3.rect(955, 550, 90, 10);
window3.fillStyle = "grey";
window3.fill();
window3.lineWidth = 3;
window3.strokeStyle = "black";
window3.stroke();
window3.closePath();
//
//snow window 3
snow.beginPath();
snow.arc(960, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(965, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(970, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(975, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(980, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(985, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(990, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(995, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1000, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1005, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1010, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1015, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1020, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1025, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1030, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1035, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1040, 548, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();

//tree
//trunk
let trunk = canvas.getContext("2d");
trunk.beginPath();
trunk.rect(205, 670, 80, 260);
trunk.fillStyle = "saddleBrown";
trunk.fill();
trunk.closePath();

//Xmas leaves
let xmasTree = canvas.getContext("2d");

xmasTree.beginPath();
xmasTree.moveTo(425, 765);
xmasTree.lineTo(80, 765);
xmasTree.lineTo(245, 620);
xmasTree.fillStyle = "darkGreen";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(395, 680);
xmasTree.lineTo(245, 535);
xmasTree.lineTo(115, 680);
xmasTree.fillStyle = "darkGreen";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(345, 600);
xmasTree.lineTo(245, 485);
xmasTree.lineTo(145, 600);
xmasTree.fillStyle = "darkGreen";
xmasTree.fill();
xmasTree.closePath();

//XmasStar

xmasTree.beginPath();
xmasTree.moveTo(245, 480);
xmasTree.lineTo(285, 510);
xmasTree.lineTo(260, 460);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(245, 440);
xmasTree.lineTo(245, 480);
xmasTree.lineTo(295, 440);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(190, 440);
xmasTree.lineTo(245, 480);
xmasTree.lineTo(295, 440);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(240, 400);
xmasTree.lineTo(230, 440);
xmasTree.lineTo(255, 440);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(245, 480);
xmasTree.lineTo(210, 510);
xmasTree.lineTo(225, 460);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();

//tinsel

xmasTree.beginPath();
xmasTree.moveTo(300, 550);
xmasTree.bezierCurveTo(238, 600, 230, 590, 185, 600);
xmasTree.lineWidth = 5;
xmasTree.strokeStyle = "silver";
xmasTree.stroke();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(330, 615);
xmasTree.bezierCurveTo(225, 680, 200, 660, 125, 672);
xmasTree.lineWidth = 5;
xmasTree.strokeStyle = "silver";
xmasTree.stroke();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.moveTo(340, 695);
xmasTree.bezierCurveTo(250, 750, 245, 735, 98, 750);
xmasTree.lineWidth = 5;
xmasTree.strokeStyle = "silver";
xmasTree.stroke();
xmasTree.closePath();

//baubles
xmasTree.beginPath();
xmasTree.arc(420, 768, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(85, 768, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(393, 686, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(118, 686, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(343, 605, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(150, 605, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "yellow";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(250, 525, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "red";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(210, 565, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "orange";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(265, 605, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "cyan";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(200, 630, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "purple";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(330, 655, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "silver";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(285, 675, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "orange";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(205, 690, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "red";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(305, 750, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "purple";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(345, 725, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "orange";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(150, 725, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "cyan";
xmasTree.fill();
xmasTree.closePath();
xmasTree.beginPath();
xmasTree.arc(240, 710, 5, 0, Math.PI * 2, true);
xmasTree.fillStyle = "silver";
xmasTree.fill();
xmasTree.closePath();

//roof snow
snow.beginPath();
snow.arc(715, 260, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(720, 256, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(725, 252, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(730, 248, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(735, 245, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(740, 241, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(745, 238, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(750, 235, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(755, 232, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(760, 229, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(765, 226, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(770, 223, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(775, 220, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(780, 217, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(785, 214, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(790, 211, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(795, 208, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(800, 205, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(805, 202, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(810, 199, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(815, 196, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(820, 193, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(825, 190, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(830, 187, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(835, 184, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(840, 181, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(845, 178, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(850, 175, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(855, 172, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(860, 169, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(865, 166, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(870, 163, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(875, 160, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(880, 157, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(885, 154, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(890, 151, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(895, 148, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(900, 145, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(905, 142, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(910, 139, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
//
//

snow.beginPath();
snow.arc(915, 139, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(920, 142, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(925, 145, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(930, 148, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(935, 151, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(940, 154, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(945, 157, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(950, 160, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(955, 163, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(960, 166, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(965, 169, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(970, 172, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(975, 175, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(980, 178, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(985, 181, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(990, 184, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(995, 187, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1000, 190, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1005, 193, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1010, 196, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1015, 199, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1020, 202, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1025, 205, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1030, 208, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1035, 211, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1040, 214, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1045, 217, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1050, 220, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1055, 223, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1060, 226, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1065, 229, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1070, 232, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1075, 235, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1080, 238, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1085, 241, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1090, 244, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1095, 247, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1100, 250, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1105, 253, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1110, 256, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1115, 259, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.beginPath();
snow.arc(1120, 262, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();
snow.beginPath();
snow.arc(1125, 265, 5, 0, Math.PI * 2, true);
snow.fillStyle = "white";
snow.fill();
snow.closePath();

//
//word
words = canvas.getContext("2d");
words.beginPath();
words.font = "60px Comic Sans MS";
words.fillStyle = "white";
words.fillText("Thank You", 70, 170);
words.closePath();
words.beginPath();
words.font = "55px Comic Sans MS";
words.fillStyle = "white";
words.fillText("School Of Code", 180, 240);
words.closePath();
words.beginPath();
words.font = "55px Comic Sans MS";
words.fillStyle = "white";
words.fillText("Happy", 1270, 170);
words.closePath();
words.beginPath();
words.font = "55px Comic Sans MS";
words.fillStyle = "white";
words.fillText("Holidays", 1370, 240);
words.closePath();
words.beginPath();
words.font = "55px Comic Sans MS";
words.fillStyle = "white";
words.fillText("Everyone", 770, 730);
words.closePath();
words.beginPath();
words.font = "55px Comic Sans MS";
words.fillStyle = "white";
words.fillText("Xxx", 840, 800);
words.closePath();

snowman = canvas.getContext("2d");
//snowmanArms
snowman.beginPath();
snowman.moveTo(1600, 585);
snowman.lineTo(1660, 560);
snowman.strokeStyle = "saddleBrown";
snowman.lineWidth = 7;
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1635, 570);
snowman.lineTo(1645, 540);
snowman.strokeStyle = "saddleBrown";
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1635, 570);
snowman.lineTo(1660, 585);
snowman.strokeStyle = "saddleBrown";
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1485, 580);
snowman.lineTo(1430, 555);
snowman.strokeStyle = "saddleBrown";
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1460, 570);
snowman.lineTo(1450, 535);
snowman.strokeStyle = "saddleBrown";
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1465, 570);
snowman.lineTo(1430, 580);
snowman.strokeStyle = "saddleBrown";
snowman.stroke();
snowman.closePath();

//
//snowman
//body

snowman.beginPath();
snowman.arc(1540, 700, 85, 0, Math.PI * 2, true);
snowman.fillStyle = "white";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1540, 600, 65, 0, Math.PI * 2, true);
snowman.fillStyle = "white";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1540, 520, 55, 0, Math.PI * 2, true);
snowman.fillStyle = "white";
snowman.fill();
snowman.closePath();

//snowmanHat
snowman.beginPath();
snowman.rect(1490, 455, 95, 15);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.rect(1510, 410, 55, 60);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();

//SnowmanEyes
snowman.beginPath();
snowman.arc(1525, 495, 6, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1553, 495, 6, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
//snowmanNose
snowman.beginPath();
snowman.moveTo(1540, 530);
snowman.lineTo(1550, 508);
snowman.lineTo(1530, 508);
snowman.fillStyle = "orange";
snowman.fill();
snowman.closePath();
//snowmanMouth
snowman.beginPath();
snowman.arc(1515, 520, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1519, 528, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1527, 534, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1540, 536, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1552, 534, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1560, 528, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1564, 520, 4, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();

//snowmanButtons
snowman.beginPath();
snowman.arc(1540, 590, 7, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1540, 640, 7, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();
snowman.beginPath();
snowman.arc(1540, 700, 7, 0, Math.PI * 2, true);
snowman.fillStyle = "black";
snowman.fill();
snowman.closePath();

//snowmanScarf
snowman.beginPath();
snowman.moveTo(1590, 555);
snowman.bezierCurveTo(1560, 565, 1510, 565, 1490, 555);
snowman.lineWidth = 9;
snowman.strokeStyle = "purple";
snowman.stroke();
snowman.closePath();
snowman.beginPath();
snowman.moveTo(1567, 560);
snowman.bezierCurveTo(1560, 560, 1575, 560, 1580, 620);
snowman.lineWidth = 9;
snowman.strokeStyle = "purple";
snowman.stroke();
snowman.closePath();
