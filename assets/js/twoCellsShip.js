//TWO CELLS SHIP
function twoCellsShip() {
    //axis selection
    axis = randomInteger(0,1);
    //horiz ship
    if(axis==0) {
        //calculating possible cells
        for(var i=0; i<10; i++)
        {
            for(var j=0; j<9; j++)
            {
                if(infoCells[i][j] != 1 && infoCells[i][j+1] != 1)
                    possibleCells.push(i+""+j);
            }
        }

        var rndCell = randomInteger(0,possibleCells.length-1);
        var xy = possibleCells[rndCell].split('');
        var x = parseInt(xy[0],10);
        var y = parseInt(xy[1],10);

        //drawimg ship
        for(var i=0; i<2; i++)
            drawCell((y+i),x);

        //locked cells
        for(var i=0; i<4; i++)
            for(var j=0; j<3; j++)
                if(!(x==0 && j==0 || x==9 && j==2 || y==0 && i==0 || y==8 && i==3))
                    infoCells[x-1+j][y-1+i] = 1;
    }
    //vert ship
    else {
        //calculating possible cells
        for(var i=0; i<9; i++)
        {
            for(var j=0; j<10; j++)
            {
                if(infoCells[i][j] != 1 && infoCells[i+1][j] != 1)
                    possibleCells.push(i+""+j);
            }
        }

        var rndCell = randomInteger(0,possibleCells.length-1);
        var xy = possibleCells[rndCell].split('');
        var x = parseInt(xy[0],10);
        var y = parseInt(xy[1],10);

        //drawimg ship
        for(var i=0; i<2; i++)
            drawCell(y,(x+i));

        //locked cells
        for(var j=0; j<4; j++)
            for(var i=0; i<3; i++)
                if(!(x==0 && j==0 || x==8 && j==3 || y==0 && i==0 || y==9 && i==2))
                    infoCells[x-1+j][y-1+i] = 1;
    }
}
