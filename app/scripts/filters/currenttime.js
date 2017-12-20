(function() {
    function currenttime() {
        return function(miliseconds) {
            var miliseconds = Number.parseFloat(miliseconds);

            if (Number.isNaN(seconds)) {
                return '00:00';
            }

            var wholeSeconds = Math.floor(miliseconds);
            var minutes = Math.floor(wholeSeconds / 60);
            var remainingSeconds = wholeSeconds % 60;

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var output = minutes + ':';

            if (remainingSeconds < 10) {
                output += '0';
            }

            output += remainingSeconds;

            return output;
        };
    }

    angular
        .module('blocTime')
        .filter('currenttime', currenttime);
})();