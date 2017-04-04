var xPos = 420;
var yPos = 30;

var xPosb = -20;
var yPosb = 30;

draw = function() {
    
    background(29, 40, 115);
    
    fill(255, 242, 0);
    ellipse(215, 44, 5, 6);
    ellipse(84, 71, 10, 10);
    ellipse(285, 103, 5, 5);
    ellipse(325, 22, 10, 10);
    ellipse(144, 44, 10, 10);
    ellipse(78, 13, 8, 8);
    ellipse(285, 21, 10, 10);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos-=6;
    yPos+=0.8;
    
    fill(255, 242, 0);
    ellipse(xPosb, yPosb, 10, 10);
    xPosb+=6;
    yPosb+=0.95;
    
};
