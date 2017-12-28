(function() {
    function Task($firebaseArray) {
        var Task = {};
        
        var ref = firebase.database().ref();
        
        // download tasks into a synchronized array
        var tasks = $firebaseArray(ref);

        Task.add = function(task){
            
            tasks.$add(task);
        };

        return Task;

    }
  
    angular
        .module('blocTime')
        .factory('Task', ['$firebaseArray', Task]);
  })();