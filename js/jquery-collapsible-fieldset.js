/**
 * jQuery Plugin for creating collapsible fieldset.
 *
 * Copyright (c) 2013 Mirza Busatlic
 */

(function($) {
  
	/**
	 * Collapse/uncollapse the specified fieldset.
	 * @param {object} $fieldset
	 * @param {object} options
	 * @param {boolean} collapse
	 */
	function collapse($fieldset, options, collapse) {
		$container = $fieldset.find("div");
		if(collapse) {
			if(options.animation) {
				$container.slideUp(options.speed);
			} else {
				$container.hide();
			}
			$fieldset.toggleClass("expanded", "collapsed");
		} else {
			if(options.animation) {
				$container.slideDown(options.speed);
			} else {
				$container.show();
			}
			$fieldset.toggleClass("collapsed", "expanded");
		}
	}
	
	$.fn.collapsible = function(options) {
		var settings = {
			collapsed: false, 
			animation: true, 
			speed: "medium"
		};
		
		$.extend(settings, options);
		
		this.each(function() {
			var $fieldset = $(this);
			var $legend = $fieldset.children("legend");
			var isCollapsed = $fieldset.attr("class").search("collapsed") >= 0;
			
			$legend.click(function() {
				collapse($fieldset, settings, !isCollapsed);
				isCollapsed = !isCollapsed;
			});
			
			// Perform initial collapse.
			// Don't use animation to close for initial collapse.
			if(isCollapsed) {
				collapse($fieldset, {animation: false}, isCollapsed);
			} else {
				collapse($fieldset, settings, isCollapsed);
			}
			
		});
	}
})(jQuery);
