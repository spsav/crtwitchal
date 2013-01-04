angular.module('Twitter', ['ngResource']);

function TwitterCtrl($scope, $http) {
	$scope.tweets = []
	$scope.tweet_ids = [];
	$scope.refresh_timeout = false;
	$scope.limit = 10;

	$scope.search = function () {
		$scope.tweets = [];
		$scope.call_api();
	};

	$scope.call_api = function() {
		if($scope.refresh_timeout !== false) {
			window.clearTimeout($scope.refresh_timeout);
		}
		$http.get('http://challenge.crowdriff.com/twitter/search/?q=' + $scope.keyword).success($scope.callback);
	}

	$scope.callback = function(data) {
		data.reverse();
		for(var i = 0; i < data.length; i++) {
			var tweet = data[i];
			if($scope.tweet_ids.indexOf(tweet.id_str) === -1) {
				$scope.tweets.unshift(data[i]);
				$scope.tweet_ids.push(tweet.id_str);
			}
		}

		$scope.refresh_timeout = setTimeout($scope.call_api, 30000);	
	}
}
