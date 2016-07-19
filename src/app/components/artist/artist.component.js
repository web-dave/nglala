(function () {
    'use strict';

    /* @ngInject */
    function artistController(spotifyService) {
        var vm = this;
        vm.artist = '';
        vm.albums = '';

        this.$routerOnActivate = function (next) {
            
            spotifyService.getArtist(next.params.id).then(function(response){
                vm.artist = response.data;
            });
            

            spotifyService.getAlbums(next.params.id).then(function(response){
                vm.albums = response.data;
            });
        };

        function constructor() {}

        constructor();
    }

    var artist = {
        templateUrl: 'src/app/components/artist/artist.component.html',
        controller: artistController
    };


    angular
        .module('nglala')
        .component('artist', artist);
})();