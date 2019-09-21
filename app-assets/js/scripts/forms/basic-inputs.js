/*=========================================================================================
		File Name: basic-inputs.js
		Description: Input field js for label type
		----------------------------------------------------------------------------------------
		Item Name:   
		Version: 1.0
		Author: http://www.syedumerhasan.comw.syedumerhasan.com
		Author URL: hhttp://www.themeforest.net/user/http://www.syedumerhasan.comw.syedumerhasan.com
==========================================================================================*/

(function(window, document, $) {
	'use strict';
	var $html = $('html');

		//label Positions
	$(".labelUp").labelinplace();
	$(".labelDown").labelinplace({
		labelPosition: "down"
	});

	// Label Icons
	$(".labelIcon").labelinplace({
		labelArrowRight: ' <i class="icon-hand-o-right"></i> ',
		labelArrowDown: ' <i class="icon-hand-o-down"></i> ',
		labelArrowUp: ' <i class="icon-hand-o-up"></i> '
	});

	// Icons After Label
	$(".labelIconAfter").labelinplace({
		labelArrowRight: ' <i class="icon-caret-right"></i> ',
		labelArrowDown: ' <i class="icon-caret-down"></i> ',
		labelArrowUp: ' <i class="icon-caret-up"></i> ',
		labelIconPosition: "after",
		inputAttr: "id"
	});

})(window, document, jQuery);