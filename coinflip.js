var number = random(0, 3);

fill(0, 0, 0);
textSize(100);
text(number, 100, 110);

if (number < 1) {
    fill(111, 0, 255);
}
else if (number < 2) {
    fill(255, 255, 0);
}
else if (number < 3) {
    fill(255, 0, 0);
}

ellipse(200, 200, 100, 100);
