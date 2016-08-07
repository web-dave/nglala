(function () {
    'use strict';

    /* @ngInject */
    function topNavController() {
        var vm = this;

        function constructor() {}

        constructor();
    }

    var topNav = {
        templateUrl: 'app/components/topnav/topnav.component.html',
        controller: topNavController
    };


    angular
        .module('nglala')
        .component('topNav', topNav);
})();