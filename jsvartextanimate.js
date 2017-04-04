//using variables to represent how big you want font to be and also having this text attached to cursor plus increasing in size

fill(92, 24, 219);
var howBig = 30;
var draw = function() {
    howBig = howBig + 1;
    textSize(howBig);
    background(0, 238, 255);
    var myName = "Clint";
    var message = myName + "!!!";
    text(message, mouseX, mouseY);
};
