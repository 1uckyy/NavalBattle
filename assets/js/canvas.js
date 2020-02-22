var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//supporting array
var infoCells = [];
//possible cells
var possibleCells = [];

//drawing settings
context.lineWidth = 3;
context.fillStyle = "blue";

//grid drawing
drawGrid()

//draw starting ships
startingShips();

//button "Random!"
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
    drawGrid()

    //FOUR CELLS SHIP
    fourCellsShip();

    //THREE CELLS SHIPS
    for(var k=0; k<2; k++) {
        //refresh possible cells
        possibleCells = [];
        threeCellsShip();
    }

    //TWO CELLS SHIPS
    for(var k=0; k<3; k++) {
        //refresh possible cells
        possibleCells = [];
        twoCellsShip();
    }

    //ONE CELL SHIPS
    for(var k=0; k<4; k++) {
        //refresh possible cells
        possibleCells = [];
        oneCellShip();
    }
}
