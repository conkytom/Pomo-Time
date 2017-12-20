(function() {
    function Countdown($interval) {
        var Countdown = {};
        
        //Sets the display clock's default view
        Countdown.display = 1500;
        //Sets the default state of the app
        Countdown.state = "startWork";
        
        Countdown.pomodoro = 0;
        //Start function designed to be used to invoke a variety of times
        //and states, examples of current usable states are given in TimerCtrl
        Countdown.start = function(time, state) {
            //Sets start time of the countdown
            Countdown.display = time;
            //Sets state 
            Countdown.state = state;
            
            //The workhorse, this is what actually counts down the
            //numbers one second at a time
            Countdown.descend = $interval(function() {
                if (Countdown.display == 0) { 
                    Countdown.addPomodoro();
                    Countdown.end();
                }
                else
                    Countdown.display --;
            }, 1000);

        };

        //Stops the countdown and resets state to start a new work session
        Countdown.stop = function() {
            $interval.cancel(Countdown.descend);
            Countdown.display = 1500;
            Countdown.state = "startWork";
        };

        //Changes the state for when the countdown reaches 0 and gives 
        //time it ended
        Countdown.end = function() {
            $interval.cancel(Countdown.descend);
            if (Countdown.state == "break")
                Countdown.state = "startWork";
            else
                Countdown.state = "startBreak";
            Countdown.endTime = now;
        };

        var now = Date()

        Countdown.addPomodoro = function(){
            if (Countdown.pomodoro == 4)
                Countdown.pomodoro = 0;
            else
                Countdown.pomodoro ++;    
        }
        

        return Countdown;
    }
        angular
        .module('blocTime')
        .factory('Countdown', ['$interval', Countdown]);
})();