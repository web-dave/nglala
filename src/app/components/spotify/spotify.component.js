(function () {
    'use strict';

    /* @ngInject */

    var spotify = {
        template: '<top-nav></top-nav>\n<ng-outlet></ng-outlet>\n',
        $routeConfig: [
            { path: '/', name: 'Search', component: 'search', useAsDefault: true },
            { path: '/about', name: 'About', component: 'about' },
            { path: '/artist/:id', name: 'Artist', component: 'artist'},
            { path: '/album/:id', name: 'Album', component: 'album'}
        ]
    };


    angular
        .module('nglala')
        .component('spotify', spotify);
})();
