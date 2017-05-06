//angular module providing data to calls within HTML body below. 

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Best Books of 2017';
  $scope.promo = '20% Off Today Only!'; 
  $scope.product = {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08')
  };
}]);


<!doctype html>
<html>
  <head>
      <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>Book End</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">

        <h1>{{ title }}</h1>
        <h2>{{ promo }}</h2>

        <div class="col-md-6">
          <div class="thumbnail">
            <img src="img/the-book-of-trees.jpg">
            <p class="title">{{ product.name }}</p>
            <p class="price">{{ product.price | currency }}</p>
            <p class="date"> {{ product.pubdate | date }}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>


    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
</html>
