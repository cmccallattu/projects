//calls and iterates through array 'movies' to display underlying objects

var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    
    {
      title: "Braveheart",
      review: "Mel Gibson's best work"
    }
];

fill(84, 140, 209);
textAlign(CENTER, CENTER);
textSize(20);
for (var i = 0; i<movies.length; i++) {
    text(movies[i].title, 200, 50+(i*100));
    text(movies[i].review, 200, 75+(i*100));
}
