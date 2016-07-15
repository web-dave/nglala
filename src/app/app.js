(function() {
    'use strict';

    angular.module('nglala', [
        'ngRoute'
    ]);
    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();