var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//drawing settings
context.lineWidth = 3;
context.fillStyle = "blue";

//vert lines
function vertLines() {
    for(var i=0; i<11; i++) {
        context.beginPath();
        context.moveTo(2+33*i,0);
        context.lineTo(2+33*i,334);
        context.closePath();
        context.stroke();
    }
}

//horiz lines
function gorizLines() {
    for(var i=0; i<11; i++) {
        context.beginPath();
        context.moveTo(0,2+33*i);
        context.lineTo(334,2+33*i);
        context.closePath();
        context.stroke();
    }
}

//grid drawing
vertLines();
gorizLines();

//supporting array
var freeCells = [];
for(var i=0; i<100;i++)
    freeCells.push(i);

context.fillRect(3,3,30,30);

//трёхклеточный корабль
context.fillRect(3,3+33*6,30,30);
context.fillRect(3,3+33*7,30,30);
context.fillRect(3,3+33*8,30,30);
context.fillRect(3,3+33*9,30,30);

//random function
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var randBtn = document.getElementById("randBtn");
randBtn.onclick = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    vertLines();
    gorizLines();
    var dim = randomInteger(0,1);
    if(dim==0) {
        var x = randomInteger(0,6);
        var y = randomInteger(0,9);
        context.fillRect(3+33*x,3+33*y,30,30);
        context.fillRect(3+33*(x+1),3+33*y,30,30);
        context.fillRect(3+33*(x+2),3+33*y,30,30);
        context.fillRect(3+33*(x+3),3+33*y,30,30);
    } else {
        var x = randomInteger(0,9);
        var y = randomInteger(0,6);
        context.fillRect(3+33*x,3+33*y,30,30);
        context.fillRect(3+33*x,3+33*(y+1),30,30);
        context.fillRect(3+33*x,3+33*(y+2),30,30);
        context.fillRect(3+33*x,3+33*(y+3),30,30);
    }
}
