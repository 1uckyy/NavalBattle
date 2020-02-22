//ONE CELL SHIP
function oneCellShip() {
    //calculating possible cells
    for(var i=0; i<10; i++)
    {
        for(var j=0; j<10; j++)
        {
            if(infoCells[i][j] != 1)
                possibleCells.push(i+""+j);
        }
    }

    var rndCell = randomInteger(0,possibleCells.length-1);
    var xy = possibleCells[rndCell].split('');
    var x = parseInt(xy[0],10);
    var y = parseInt(xy[1],10);

    //drawimg ship
    drawCell(y,x);

    //locked cells
    for(var i=0; i<3; i++)
        for(var j=0; j<3; j++)
            if(!(x==0 && j==0 || x==9 && j==2 || y==0 && i==0 || y==9 && i==2))
                infoCells[x-1+j][y-1+i] = 1;
}
