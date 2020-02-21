var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//supporting array
var infoCells = [];

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

//three cells ship
context.fillRect(3,3+33*2,30,30);
context.fillRect(3,3+33*3,30,30);
context.fillRect(3,3+33*4,30,30);

//four cells ship
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
    //clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //refresh supporting array
    infoCells = [];
    for(var i=0; i<10; i++) {
        infoCells[i]= [];
        for(var j=0; j<10; j++)
            infoCells[i][j] = 0;
    }

    //grid drawing
    vertLines();
    gorizLines();

    //FOUR CELLS SHIP
    //axis selection
    var axis = randomInteger(0,1);
    //horiz ship
    if(axis==0) {
        //random start cell
        var x = randomInteger(0,9);
        var y = randomInteger(0,6);

        //locked cells
        for(var i=0; i<6; i++)
            for(var j=0; j<3; j++)
                if(!(x==0 && j==0 || x==9 && j==2 || y==0 && i==0 || y==6 && i==5))
                    infoCells[x-1+j][y-1+i] = 1;

        //drawimg ship
        for(var i=0; i<4; i++)
            context.fillRect(3+33*(y+i),3+33*x,30,30);
    } 
    //vert ship
    else {
        //random start cell
        var y = randomInteger(0,9);
        var x = randomInteger(0,6);

        //locked cells
        for(var j=0; j<6; j++)
            for(var i=0; i<3; i++)
                if(!(x==0 && j==0 || x==6 && j==5 || y==0 && i==0 || y==9 && i==2))
                    infoCells[x-1+j][y-1+i] = 1;

        //drawimg ship
        for(var i=0; i<4; i++)
            context.fillRect(3+33*y,3+33*(x+i),30,30);
    }

    //THREE CELLS SHIP
    //axis selection
    axis = randomInteger(0,1);
    //possible cells
    var possibleCells = [];
    if(axis==0) {
        for(var i=0;i<100;i++) {

        }
    }

}
