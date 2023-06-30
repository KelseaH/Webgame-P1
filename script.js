const canvas = document.getElementById("mazeContainer");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0,0, 300,200);
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



function canIMoveHere(x,y,ctx){
    let imd = ctx.getImageData(x,y,1,1);
    console.log("hello", ctx);
    if(imd.data[0] == 0 ) {
        return false;
    } else { 
        return true
    }
}
window.ctx = ctx;
window.canIMoveHere = canIMoveHere;



let mazeCharacter = document.createElement('img')
mazeCharacter.src = 'assets/zoro.png';
mazeCharacter.style.position = 'fixed';
mazeCharacter.style.left = '4em';
mazeCharacter.style.top = '6em';
mazeCharacter.style.height = '7em';
document.body.append(mazeCharacter)

let direction = null;
let x = '10em';
let y = '10em';

if(direction === 'west') {
    x = x - '1em'
}
if(direction === 'north') {
    y = y + '1em'
}
if(direction === 'east') {
    x = x + '1em'
}
if(direction === 'south'){
    y = y - '1em'
}
mazeCharacter.style.left = x + 'em'
mazeCharacter.style.bottom = y + 'em'
