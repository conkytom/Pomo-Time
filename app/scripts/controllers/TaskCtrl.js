(function() {
    function TaskCtrl(Task) {
        this.addTask = function() {
            //console.log(this.taskTitle);
            Task.add(this.taskTitle);
        };

        this.tasks = Task.all
    }

    angular
        .module('blocTime')
        .controller('TaskCtrl', ['Task', TaskCtrl]);
})();