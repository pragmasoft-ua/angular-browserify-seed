"use strict";

module.exports = /*@ngInject*/
	function AlbumController($scope, galleryService, $routeParams) {
		var albumId = $routeParams.id;

		$scope.loaded = false;

		galleryService.getAlbumImages(albumId)
			.then(function (data) {
				$scope.albumImages = data.slice(0, data.length > 12 ? 12 : data.length);
				$scope.loaded = true;

				$scope.loadMore = function () {
					var offset = $scope.albumImages.length;
					for (var i = offset; (i < offset + 3) && (i < data.length); i++ ) {
						$scope.albumImages.push(data[i]);
					}
				};
			});
	};
