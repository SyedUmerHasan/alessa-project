/*=========================================================================================
    File Name: advance-cards.js
    Description: intialize advance cards
    ----------------------------------------------------------------------------------------
    Item Name:   
    Version: 1.0
    Author: http://www.syedumerhasan.comw.syedumerhasan.com
    Author URL: hhttp://www.themeforest.net/user/http://www.syedumerhasan.comw.syedumerhasan.com
==========================================================================================*/
(function(window, document, $) {
    'use strict';

    /************************************************************
    *               Social Cards Content Slider                 *
    ************************************************************/
    // RTL Support
    var rtl = false;
    if($('html').data('textdirection') == 'rtl'){
        rtl = true;
    }
    if(rtl === true){
        $(".tweet-slider").attr('dir', 'rtl');
        $(".fb-post-slider").attr('dir', 'rtl');
        $(".linkedin-post-slider").attr('dir', 'rtl');
    }

})(window, document, jQuery);