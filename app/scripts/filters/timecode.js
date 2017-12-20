(function() {
    function timecode() {
        return function(seconds) {
            var seconds = Number.parseFloat(seconds);

            if (Number.isNaN(seconds)) {
                return '00:00';
            }
            var wholeSeconds = Math.floor(seconds);
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
        .filter('timecode', timecode);
})();