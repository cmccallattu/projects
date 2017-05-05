//where dealing with a movies database, demonstrating sql query methods

select * from movies
where year between 1990 and 2000
and genre = 'comedy';  // AND method

select * from movies
where genre = 'comedy'
or year < 1980;  // OR method

select * from movies
order by imdb_rating desc; 
