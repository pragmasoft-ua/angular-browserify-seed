"use strict";

module.exports = /*@ngInject*/
	function whenScrolled($window) {
		return {
			link: function (scope, element, attrs) {
				var checkBounds = function (evt) {
					var activeElement = evt.target.activeElement;
					if (activeElement.scrollTop + activeElement.offsetHeight >= activeElement.scrollHeight) {
						scope.$apply(attrs.whenScrolled);
					}
				};
				angular.element($window).bind("scroll", checkBounds);
			}
		};
	};
