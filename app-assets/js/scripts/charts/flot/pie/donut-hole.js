/*=========================================================================================
    File Name: donut-hole.js
    Description: Flot donut hole chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author:    
    Author URL:   
==========================================================================================*/

// Donut hole chart
// ------------------------------
$(window).on("load", function(){

    var options = {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true
            }
        },
        colors: ['#FFC400', '#FF7D4D', '#FF4558','#626E82', '#28D094', '#00A5A8']
    };

    var data = [
        { label: "Series1",  data: 50},
        { label: "Series2",  data: 70},
        { label: "Series3",  data: 60},
        { label: "Series4",  data: 90},
        { label: "Series5",  data: 80},
        { label: "Series6",  data: 110}
    ];

    $.plot("#donut-hole-chart", data, options);
});