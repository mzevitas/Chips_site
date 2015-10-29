$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
        sectionsColor : [],
        fixedElements: '#header, .footer',
        css3: true,
         scrollingSpeed: 800,
         scrollBar: false,
        scrollOverflow: false,
         // fitToSection: true,
         resize: false,
         touchSensitivity: 5,
         easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
         sectionsColor : ['#000000','#000000','#000000','#000000',],
         responsiveHeight: 600,
       

    });
    });



