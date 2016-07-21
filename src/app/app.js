(function () {
    'use strict';
    angular.module('nglala', ['ngComponentRouter'])
        .value('$routerRootComponent', 'spotify')
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();