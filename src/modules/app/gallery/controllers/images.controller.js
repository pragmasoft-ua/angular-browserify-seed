"use strict";

module.exports = /*@ngInject*/
	function ImagesController($scope, galleryService) {
		$scope.loaded = false;

		galleryService.getAllImages()
			.then(function (data) {
				$scope.images = data.slice(0, data.length > 12 ? 12 : data.length);
				$scope.loaded = true;

				$scope.loadMore = function () {
					var offset = $scope.images.length;
					for (var i = offset; (i < offset + 3) && (i < data.length); i++ ) {
						$scope.images.push(data[i]);
					}
				};
			});
	};
