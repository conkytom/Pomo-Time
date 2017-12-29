(function() {
    function Task($firebaseArray) {
        var Task = {};
        
        var ref = firebase.database().ref();
        
        // download tasks into a synchronized array
        var tasks = $firebaseArray(ref);

        Task.all = tasks;

        Task.add = function(task){
            
            tasks.$add({
                'task'      : task,
                'addedAt'   : moment().format('MMM Do h:mm a'),
                'timestamp' : firebase.database.ServerValue.TIMESTAMP
            });
        };
        return Task;

    }
  
    angular
        .module('blocTime')
        .factory('Task', ['$firebaseArray', Task]);
  })();