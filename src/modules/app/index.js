"use strict";

module.exports = angular
	.module("expressly", [
		"expressly.config",

		"ngRoute",
		"ngAnimate",
		"ngAria",
		"ngMaterial",
		"ngMdIcons",

		// html templates in $templateCache
		require("../../../tmp/templates").name,

		// common directives, filters, services
		require("../common").name,

		// modules
		require("./gallery").name
	])

	.config(/*@ngInject*/ function ($mdIconProvider) {
		$mdIconProvider.icon("menu", "../../assets/img/ic_menu_white_48px.svg", 48);
		$mdIconProvider.icon("home", "../../assets/img/ic_home_white_48px.svg", 48);
		$mdIconProvider.icon("google", "../../assets/img/ic_search_white_48px.svg", 48);
	});
