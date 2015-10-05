"use strict";

module.exports = angular
	.module("expressly.gallery", [])
	.config(require("./routes.js"))
	.controller("ImagesController", require("./controllers/images.controller.js"))
	.controller("AlbumController", require("./controllers/album.controller"))
	.controller("ImageController", require("./controllers/image.controller.js"));
