var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){

	$scope.postData = function(question){
		parseService.postQuestion(question).then(function(results){
			$scope.getParseDate();
		})		
	};

	$scope.getParseDate = function(){
		parseService.getData().then(function(data){
			$scope.questions = data.data.results;
		})
	}

});//end controller