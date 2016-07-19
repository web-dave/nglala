(function () {
    'use strict';

    /* @ngInject */
    function topNavController() {
        var vm = this;

        function constructor() { }

        constructor();
    }

    var topNav = {
        templateUrl: 'src/app/components/topnav/topnav.html',
        controller: topNavController,
        $routeConfig: [
            { path: '/', name: 'Search', component: 'search', useAsDefault: true },
            { path: '/about', name: 'About', component: 'about' },
            { path: '/artist/:id', name: 'Artist', component: 'artist'},
            { path: '/album/:id', name: 'Album', component: 'album'}
        ]
    };


    angular
        .module('nglala')
        .component('topNav', topNav);
})();