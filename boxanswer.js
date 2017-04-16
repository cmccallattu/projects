//could easily set up below framework as foundation for test taking program

var theNumber = -50;

fill(0, 0, 0);
textSize(30);
text("Analysis of: " + theNumber, 10, 36);

text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);

noFill();
if (theNumber>0) {
    rect(5, 60, 200, 40);
}
if (theNumber===0) {
    rect(5, 160, 200, 40);
}
if (theNumber<0) {
rect(5, 109, 200, 40);
}
