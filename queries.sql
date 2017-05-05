//where dealing with a movies database, demonstrating sql query methods

select * from movies
where year between 1990 and 2000
and genre = 'comedy';  // AND method

select * from movies
where genre = 'comedy'
or year < 1980;  // OR method

select * from movies
order by imdb_rating desc;  // ORDER BY method with DESC parameter

select * from movies
order by imdb_rating asc
limit 3;  //  LIMIT method to reduce return of query to 3

select price, count(*) from fake_apps //COUNT method which totals the number of rows in the data set then groups them by price
group by price;

select price, count(*) from fake_apps
where downloads > 20000
group by price;

select sum(downloads) from fake_apps; //SUM method to total downloads within fake-apps data set

select category, sum(downloads) from fake_apps //sums all downloads within given category and groups them by this category
group by category;

select name, category, min(downloads) from fake_apps //similar to MAX method except MIN method returns smallest downloads values
group by category;

select price, avg(downloads) from fake_apps  //AVG method
group by price;

select price, round(avg(downloads), 2) from fake_apps //ROUND method to two places
group by price;
