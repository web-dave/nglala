// module
(function () {
    'use strict';

    angular.module('modulename', [])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'mainController',
                    template: 'todo'
                })
                .when('/about', {
                    template: '<about></about>'
                })
                .otherwise({ redirectTo: '/' });
        });
    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['modulename']);
    });


})();
// directive
(function () {
    'use strict';

    angular
        .module('modulename')
        .directive('myDir', myDir);
    /* @ngInject */
    function myDir(dependency1) {
        var directive = {
            bindToController: true,
            controller: myController,
            controllerAs: '$ctrl',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) { }
    }
    /* @ngInject */
    function myController() { }
})();
// component
(function () {
    'use strict';

    angular
        .module('modulename')
        .component('myComp', myComp);

    /* @ngInject */
    function myCompController() {
        var vm = this;

        function constructor() { }

        constructor();
    }

    var myComp = {
        templateUrl: 'app/components/myComp/myComp.html',
        controller: myCompController
    };
})();
// service
(function () {
    'use strict';

    angular
        .module('modulename')
        .service('myserv', myserv);

    /* @ngInject */
    function myserv($http) {
        var vm = this;
        vm.serviceMethode = function () { }
    }
})();
// filter
(function () {
    'use strict';

    angular
        .module('modulename')
        .filter('myfilter', myfilter);

    function myfilter() {
        return function (input) {
            var output = input;
            return output;
        };
    }
})();