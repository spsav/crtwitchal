angular.module('Twitter', ['ngResource']);

function TwitterCtrl($scope, $resource) {
  $scope.twitter = $resource('http://search.twitter.com/:action',
    {action:'search.json', callback:'JSON_CALLBACK'},
    {get:{method:'JSONP'}}
  );
  
  $scope.search = function () {
      $scope.twitterResult = $scope.twitter.get({q:$scope.keyword});
  };
}