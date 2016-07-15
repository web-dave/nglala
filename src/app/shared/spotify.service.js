(function () {
    'use strict';

    angular
        .module('nglala')
        .service('spotifyService', spotify);

    /* @ngInject */
    function spotify($http) {
        var vm = this;
        vm.root = 'https://api.spotify.com/v1/';

        vm.getArtists = function (query) {
            var url = vm.root + 'search?offset=0&limit=20&type=artist&market=US&query=' + query;
            return $http.get(url);
        };

        vm.getArtist = function (id) {
            var url = vm.root + 'artists/' + id;
            return $http.get(url);
        };

        vm.getAlbums = function (id) {
            var url = vm.root + 'artists/' + id + '/albums';
            return $http.get(url);
        };

        vm.getAlbum = function (id) {
            var url = vm.root + 'albums/' + id;
            return $http.get(url);
        };
    }
})();