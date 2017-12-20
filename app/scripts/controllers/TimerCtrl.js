(function() {
    function TimerCtrl(Countdown) {
/**
 * 30min = 1800 seconds
 * 25min = 1500 seconds
 * 15min = 900 seconds 
 * 5min = 300 seconds
 * 
 * States and their inteded output
 * -startWork: 
 *      banner: Start Work Session
 *      timer: 25:00
 *      button: Start
 * -working:
 *      banner: Work Session
 *      timer: countdown from 25:00
 *      button: Stop (alerts that it ends session 
 *              resets to startWork)
 * -startBreak
 *      banner: Take a Break
 *      timer: 00:00
 *      button: Break Buttons(5,15,30)
 * -break
 *      banner: Break Time
 *      timer: countdown from 5/15/30 mins
 *      button: Stop(alerts that it ends break
 *              resets to startWork)
 * Footer always gives the time that the last session 
 * or break ended or was stopped.
 */

        this.countdown = Countdown;
    }

    angular
        .module('blocTime')
        .controller('TimerCtrl', ['Countdown', TimerCtrl]);
})();