(function () {
    'use strict';
    angular.module('nglala', ['ngComponentRouter'])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'search')
        // .config(function ($routeProvider) {
        //     $routeProvider
        //         .when('/', {
        //             template: '<search><search>'
        //         })
        //         .when('/artist/:id', {
        //             template: '<artist><artist>'
        //         })
        //         .when('/album/:id', {
        //             template: '<album></album>'
        //         })
        //         .when('/about', {
        //             template: '<about><about>'
        //         })
        //         .otherwise({ redirectTo: '/' });
        // });

    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();