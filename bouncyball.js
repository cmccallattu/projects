var y = 0;

var speed = 2;

draw = function() {
    background(127, 204, 255);
    
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);
    
    if (y > 375) {
        speed = -2;
    }
    if (y<25) {
       speed = 2;
    }

    // move the ball
    y = y + speed;
};
