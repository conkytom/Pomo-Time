(function() {
    function Countdown($interval) {
        var Countdown = {};
        
        //Sets the display clock's default view
        Countdown.display = 1500;
        //Sets the default state of the app
        Countdown.state = "startWork";
        
        //sets pomodoro count to 0
        Countdown.pomodoro = 0;

        //loads the ding sound that's played at the end of a session
        var ding = new buzz.sound( "./assets/sounds/ding", {
            formats: ['mp3'],
            preload: true
          });

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
            //Ends the descent
            $interval.cancel(Countdown.descend);
            //plays a sound
            ding.play();
            //Used to show the time that the last session ended
            Countdown.endTime = moment().format('h:mm a');
            //changes the state
            if (Countdown.state == "break")
                Countdown.state = "startWork";
            else {
                //adds pomodoro if a work session has ended
                Countdown.addPomodoro();
                Countdown.state = "startBreak";
            }
        };

        
    

        //Adds pomodoros, every 4 pomodoros allows for a 15/30min break
        Countdown.addPomodoro = function(){
            if (Countdown.pomodoro == 4)
                Countdown.pomodoro = 0;
            else
                Countdown.pomodoro ++;    
        };


        return Countdown;
    }
        angular
        .module('blocTime')
        .factory('Countdown', ['$interval', Countdown]);
})();