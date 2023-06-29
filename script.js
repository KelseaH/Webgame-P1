const canvas = document.getElementById("mazeContainer");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 4;
ctx.lineCap = "round";

ctx.beginPath();
ctx.moveTo(30,0);
ctx.lineTo(30,40);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,50);
ctx.stroke();