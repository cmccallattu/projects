//creates multi-color palette cursor that paints circles based on positions of mouseX & mouseY on screen

draw = function() {
    stroke(mouseY, mouseX, 0);
    fill(mouseX, mouseY, 0);
    ellipse(mouseX+4, mouseY, 10, 10);
    
};
