(function() {
  var app = angular.module('racketRez', []);

  app.controller('ReservationController', ['$http', function($http) {
      var res = this;

      res.reservations = [];
      $http.get('reservations.json').success(function(data) {
        res.reservations = data;
      });
    }]);
})();