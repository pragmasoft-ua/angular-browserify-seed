"use strict";

module.exports = /*@ngInject*/
	function ImageController($scope, galleryService, $routeParams) {
		var imageId = $routeParams.id;

		$scope.loaded = false;

		galleryService.getImage(imageId)
			.then(function (data) {
				$scope.image = data;
				$scope.loaded = true;
			});
	};
