(function () {
    'use strict';

    /* @ngInject */
    function albumController(spotifyService, $sce) {
        var vm = this;
        vm.album = '';

        this.$routerOnActivate = function (next) {
            spotifyService.getAlbum(next.params.id).then(function(response){
                vm.album = response.data;
            });
        };

        function constructor() {}

        vm.getAudioUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        };

        constructor();
    }

    var album = {
        templateUrl: 'src/app/components/album/album.component.html',
        controller: albumController
    };


    angular
        .module('nglala')
        .component('album', album);
})();