var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){

	$scope.postData = function(question){
		parseService.postQuestion(question).then(function(results){
			console.log(results);
		})		
	}

});//end controller