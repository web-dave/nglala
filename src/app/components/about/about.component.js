(function () {
    'use strict';

    /* @ngInject */
    function aboutController() {
        var vm = this;

        function constructor() {}

        constructor();
    }

    var about = {
        templateUrl: 'src/app/components/about/about.component.html',
        controller: aboutController
    };


    angular
        .module('nglala')
        .component('about', about);
})();
