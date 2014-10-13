(function() {

  var app = angular.module('racketRez', []);

  app.controller('ReservationController', ['$http', function($http) {
    var res = this;

    res.reservations = [];

    // cheap way to mock data
    $http.get('reservations.json').success(function(data) {
      res.reservations = data;
    });
  }]);

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
})();