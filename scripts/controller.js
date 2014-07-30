(function () {
 	angular.module('todoApp', []); 	

	function MainCtrl ($scope, Services) {

		this.tasks = Services.tasks;

		$scope.getTodos = function(){
			
			return Services.getItems() +"/" + Services.tasks.length;
		}

		this.check = function(){	
			Services.check();		
		}	
		
		this.addTask = function(){
			Services.addTask($scope.toDoText);
			$scope.toDoText = ''; 				
		}

		this.deleteBox = function(taskName){	
			Services.deleteBox(taskName); 
		}
	}

	angular
	  .module('todoApp')
	  .controller('MainCtrl', MainCtrl);

 }());