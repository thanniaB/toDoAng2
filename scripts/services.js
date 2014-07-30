(function () {
	var tasks = [{name: "washuwa", done: false}];
 	var items = tasks.length;
	function Services () {		
		this.tasks = tasks;
		this.items = items;

		this.getItems = function (){
			return items;
		}

	    this.check = function(){				
			items = tasks.length;
			tasks.forEach(function(task){
					if(task.done){
						items--;
					} 
				}
			);
			
		}	

		this.addTask = function(toDoText){
			tasks.push({name: toDoText, done: false});			
			this.check(); 				
		}

		this.deleteBox = function(taskName){
			for(var i=0; i < tasks.length; i++ ){
					if(tasks[i].name === taskName){
						index = i;
					}
				}
				tasks.splice(index, 1); 	
			this.check(); 
		}
	}
	angular
	  .module('todoApp')
	  .service('Services', Services);
}());