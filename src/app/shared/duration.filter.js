(function () {
    'use strict';

    function duration() {
        return function (input) {
            var s = input / 1000;
            var minuten = Math.floor(s / 60);
             if (minuten < 10) {
                minuten = '0' + minuten;
            }
            var sekunden = Math.round(s - (minuten * 60));
            if (sekunden < 10) {
                sekunden = '0' + sekunden;
            }
            return minuten + ':' +  sekunden;
        }
    }

    angular
        .module('nglala')
        .filter('duration', duration);
})();