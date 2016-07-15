(function () {
    'use strict';

    /* @ngInject */
    function albumController($routeParams, spotifyService, $sce) {
        var vm = this;
        vm.album = '';

        function constructor() {

            spotifyService.getAlbum($routeParams.id).then(function(response){
                vm.album = response.data;
            });
        }

        vm.getAudioUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        }

        constructor();
    }

    var album = {
        templateUrl: 'app/components/album/album.component.html',
        controller: albumController
    };


    angular
        .module('nglala')
        .component('album', album);
})();