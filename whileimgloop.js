background(144, 240, 234);

//Sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

var grass = getImage("/*insert grass image*/");
var x = 0;

var tree = getImage("/*insert tree image*/");

// tree and grass loop
while (x<350) {
image(grass, x, 270);
image(tree, x, 200);
x+=100;
}
