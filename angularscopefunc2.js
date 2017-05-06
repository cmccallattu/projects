//another example of angular scope functions with data being called into html elements in code below

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Best Books of 2017';
  $scope.promo = '20% Off Today Only!';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    },
    {
      name: 'The Eye of the World',
      price: 15,
      pubdate: new Date('1993', '01', '01'),
      cover: 'https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg'
    },
    {
      name: 'The Great Hunt',
      price: 15,
      pubdate: new Date('1994', '01', '01'),
      cover: 'https://vignette2.wikia.nocookie.net/wot/images/d/dc/TGHCover.jpg/revision/latest?cb=20100409201514'
    }
  ];

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
        
        <div ng-repeat="product in products" class="col-md-6"> 
          <div class="thumbnail"> 
            <img ng-src="{{ product.cover }}"> 
            <p class="title">{{ product.name }}</p> 
            <p class="price">{{ product.price | currency }}</p> 
            <p class="date">{{ product.pubdate | date }}</p> 
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