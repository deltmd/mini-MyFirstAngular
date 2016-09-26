angular.module('friendsList')
.controller('mainCtrl', function($scope){
  $scope.friends = [
    {
      name: 'mock',
      awesome: 'yeah!'
    },
    {
      name: 'ing',
      awesome: 'yeah!'
    },
    {
      name: 'bird',
      awesome: 'yeah!'
    },
    {
      name: 'Mock-ing-bird',
      awesome: 'yeah.'
    },
  ]
});
