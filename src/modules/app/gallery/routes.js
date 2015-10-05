"use strict";

module.exports = /*ngInject*/
	function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "app/gallery/templates/images.html",
				controller: "ImagesController"
			})
			.when("/album/:id", {
				templateUrl: "app/gallery/templates/album.html",
				controller: "AlbumController"
			})
			.when("/image/:id", {
				templateUrl: "app/gallery/templates/image.html",
				controller: "ImageController"
			})
			.otherwise({
				redirectTo: "/"
			});
	};
