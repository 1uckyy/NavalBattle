//draw vertical lines
function vertLines() {
    for(var i=0; i<11; i++) {
        context.beginPath();
        context.moveTo(2+33*i,0);
        context.lineTo(2+33*i,334);
        context.closePath();
        context.stroke();
    }
}

//draw horizontal lines
function gorizLines() {
    for(var i=0; i<11; i++) {
        context.beginPath();
        context.moveTo(0,2+33*i);
        context.lineTo(334,2+33*i);
        context.closePath();
        context.stroke();
    }
}

//draw grid
function drawGrid() {
    vertLines();
    gorizLines();
}
