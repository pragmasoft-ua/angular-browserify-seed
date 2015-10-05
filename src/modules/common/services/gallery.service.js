"use strict";

module.exports = /*@ngInject*/
	function galleryService($http, config) {

		function getErrorMessage(response) {
			return "HTTP error code: " + response.status + (response.statusText ? " (" + response.statusText + ")" : "");
		}

		return {
			getAllImages: function () {
				return $http.get(config.apiBaseUrl + "/photos")
					.then(function(response) {
						return response.data;
					}, function (response) {
						console.log("Unable to get images. " + getErrorMessage(response));
					});
			},

			getAlbumImages: function (id) {
				return $http.get(config.apiBaseUrl + "/albums/" + id + "/photos")
					.then(function(response) {
						return response.data;
					}, function (response) {
						console.log("Unable to get images of album with id=" + id + ". " + getErrorMessage(response));
					});
			},

			getImage: function (id) {
				return $http.get(config.apiBaseUrl + "/photos/" + id)
					.then(function(response) {
						return response.data;
					}, function (response) {
						console.log("Unable to get image with id=" + id + ". " + getErrorMessage(response));
					});
			}
		};
	};
