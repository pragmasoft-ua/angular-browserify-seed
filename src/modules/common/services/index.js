"use strict";

module.exports = angular
	.module("expressly.common.services", [])
	.factory("galleryService", require("./gallery.service.js"));
