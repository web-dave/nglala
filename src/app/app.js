(function () {
    'use strict';
    angular.module('nglala', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<search><search>'
                })
                .when('/artist/:id', {
                    template: '<artist><artist>'
                })
                .when('/about', {
                    template: '<about><about>'
                })
                .otherwise({ redirectTo: '/' });
        });

    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();