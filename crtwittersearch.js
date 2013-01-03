angular.module('Twitter', ['ngResource']);

function TwitterCtrl($scope, $resource) {
  $scope.twitter = $resource('http://challenge.crowdriff.com/twitter/search%2F');
  
  $scope.search = function () {
      $scope.twitterResult = $scope.twitter.get({q:$scope.keyword});
  };
}