(function() {
    'use strict';

    angular.module('nglala', [
        'ngRoute'
    ])
    .element(document).ready(function () {
        angular.bootstrap(document.body, ['nglala']);
    });
})();