(function () {
    'use strict';

    /* @ngInject */
    function searchController(spotifyService) {
        var vm = this;
        vm.searchStr = '';
        vm.searchResult = '';

        function constructor() {}

        vm.searchMusic = function(){
            spotifyService.getArtists(vm.searchStr).then(function(response) {
                console.log(response.data);
                vm.searchResult = response.data.artists;
            });
        };

        constructor();
    }

    var search = {
        templateUrl: 'src/app/components/search/search.component.html',
        controller: searchController
    };


    angular
        .module('nglala')
        .component('search', search);
})();
