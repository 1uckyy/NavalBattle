//FOUR CELLS SHIP
function fourCellsShip() {
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
            drawCell((y+i), x);
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
            drawCell(y,(x+i))
    }
}
