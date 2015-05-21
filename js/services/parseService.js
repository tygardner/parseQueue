var app = angular.module('parseQ');

app.service('parseService', function($http, $q, httpRequestInterceptor){

	this.postQuestion = function(question){
		var deferred = $q.defer();
		$http(httpRequestInterceptor.request({
			method: 'POST',
			data: {question: question},
			url:  'https://api.parse.com/1/classes/question' 
		})).then(function(results){
			deferred.resolve(results)
		})
		return deferred.promise;
	};

	this.getData = function(){
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/queue/'
		})
	};


}); //end service