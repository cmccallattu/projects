noStroke();
// the beautiful blue sky


// the starting size for the sun
var sunSize = -20; //sun appears to emerge from nothing

 // The sun, a little circle on the horizon


// The land, blocking half of the sun


draw = function() {
    background(82, 222, 240);
    
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);
    
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
    sunSize = sunSize + 0.05; //sun will very slowly expand in size
    
    
};
