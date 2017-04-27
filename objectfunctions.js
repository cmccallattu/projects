//program that paints image in tracking with the location of the mouse on the screen


var paintBrush = {
    x: 300,
    y: 250,
    img: getImage("/*call image*/")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};

paintCanvas();
