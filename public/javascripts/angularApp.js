(function() {

  var app = angular.module('racketRez', []);

  app.controller('ReservationController', ['$http', function($http) {
    var res = this;

    res.reservations = [];

    // cheap way to mock data
    $http.get('javascripts/reservations.json').success(function(data) {
      res.reservations = data;
    });

    this.addReservation = function() {
      this.reservations.push({
        owner: 'current user',
        court: parseInt($('#court').val(), 10),
        time: $('#datetime').data("DateTimePicker").getDate().format('ddd, MMM YYYY [at] h:mm A'),
        guests: []
      });
    };
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