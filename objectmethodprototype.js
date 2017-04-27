

var Winston = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

// the draw method
Winston.prototype.draw = function() {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x+20, this.y-10);    
};

Winston.prototype.talk = function() {
    text("I'm Winston!", this.x+20, this.y+150);
};

var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

winstonTeen.draw();
winstonTeen.talk();
winstonAdult.draw();
winstonAdult.talk();
