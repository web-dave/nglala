(function () {
    'use strict';
    angular.module('nglala', ['ngComponentRouter'])
        .value('$routerRootComponent', 'spotify');

    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();