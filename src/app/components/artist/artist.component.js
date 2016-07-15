(function () {
    'use strict';

    /* @ngInject */
    function artistController($routeParams, spotifyService) {
        var vm = this;
        vm.artist = '';
        vm.albums = '';

        function constructor() {
            spotifyService.getArtist($routeParams.id).then(function(response){
                vm.artist = response.data;
            });

            spotifyService.getAlbums($routeParams.id).then(function(response){
                vm.albums = response.data;
            });
        }

        constructor();
    }

    var artist = {
        templateUrl: 'app/components/artist/artist.component.html',
        controller: artistController
    };


    angular
        .module('nglala')
        .component('artist', artist);
})();