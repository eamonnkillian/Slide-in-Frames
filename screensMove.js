/* 
 Created on : 01-Jul-2014, 09:38:58
 Author     : eamonnkillian
 */

$(document).ready(function() {
    function resizeMySite() {

        // 
        // Lets get the window height and width attributes
        //

        var windowWidth = $(window).width();
        console.log("win width " + windowWidth);
        var windowHeight = $(window).height();
        var windowArea = windowWidth * windowHeight;

        $('body').css('width', windowWidth);
        $('body').css('height', windowHeight);

        //
        // Probably an opportune moment to deal with font sizes ... In case anyone  
        // wonders why all the immediate if statements ... Look at (link below) 
        // StackOverflow and kudos with thanks to "Some" for benchmarking this ... 
        // turns out there is a 30ms overhead to using the switch-range so I've gone 
        // with immediate if's instead ... 
        // 
        // http://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than
        // 

        var fontSize = '10px';
        if (windowArea < 99999) {
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 100000 && windowArea < 249999) {
            fontSize = '12px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 250000 && windowArea < 383999) {
            fontSize = '14px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 384000 && windowArea < 467999) {
            fontSize = '16px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 468000 && windowArea < 537599) {
            fontSize = '18px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 537600 && windowArea < 614399) {
            fontSize = '20px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 614400 && windowArea < 691199) {
            fontSize = '22px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 691200 && windowArea < 786431) {
            fontSize = '24px';
            $('body').css('font-size', fontSize);
        }
        if (windowArea > 786432) {
            fontSize = '24px';
            $('body').css('font-size', '24px');
        }

        // 
        // Our Body is 100% of the width but it has a margin of
        // 5% so lets remove the margin in our CSS file and add 
        // it here explicitly ... lets also be aware of the need
        // to have no margin if someone has a really wide screen
        // and makes their browser full width and short!
        //

        var bodyMargin = windowWidth * .05;
        if (windowWidth > 1000 && windowHeight < 400) {
            bodyMargin = 0;
        } else if (windowWidth < 470) {
            bodyMargin = 0;
        }
        $('body').css('margin', bodyMargin);

        //
        // This leaves us with a new maximum width for the 
        // mainContainer of the total width minus the margins
        // either side and top and bottom ...
        // 

        var mainContainerWidth = windowWidth - (2 * bodyMargin);
        var mainContainerHeight = windowHeight - (2 * bodyMargin);
        $('.mainContainer').css('width', mainContainerWidth);
        $('.mainContainer').css('height', mainContainerHeight);

        //
        // Lets work from the top ... with heights as follows:
        //     - Heading Section 2/10ths 
        //     - Main view 6/10ths
        //     - Footer 2/10th
        // 
        // the top of the window contains the strapline and the 
        // banner
        //

        var mainheadingHeight = mainContainerHeight * .2;
        $('.mainHeader').css('height', mainheadingHeight);
        $('.mainHeader').css('width', mainContainerWidth);

        //
        // Now the left hand side
        //

        var lhsContainerWidth = mainContainerWidth * .3;
        var lhsContainerHeight = mainContainerHeight * .6;
        $('.lhsContainer').css('width', lhsContainerWidth);
        $('.lhsContainer').css('height', lhsContainerHeight);

        //
        // Now the right hand side
        //

        var rhsContainerWidth = mainContainerWidth * .7;
        var rhsContainerHeight = mainContainerHeight * .6;
        $('.rhsContainer').css('width', rhsContainerWidth);
        $('.rhsContainer').css('height', rhsContainerHeight);

        //
        // And the screens themselves
        //

        $('.screens').css('width', rhsContainerWidth);
        $('.screens').css('height', rhsContainerHeight);
        $('.screens').css('top', -2 * mainContainerHeight);

        //
        // The footer should be 2/10th of the size of the mainContainer
        //

        var mainfooterHeight = mainContainerHeight * .2;
        $('.mainFooter').css('height', mainfooterHeight);
        $('.mainFooter').css('width', mainContainerWidth);


        //
        // Now for some JQuery magic to slide things up and down
        //

        $('#pickedOne').click(function() {
            $('.screens').animate({top: -2 * mainContainerHeight}, 500);
            $('#screenOne').animate({top: '0px'}, 500);
        });

        $('#pickedTwo').click(function() {
            $('.screens').animate({top: -2 * mainContainerHeight}, 500);
            $('#screenTwo').animate({top: '0px'}, 500);
        });

        $('#pickedThree').click(function() {
            $('.screens').animate({top: -2 * mainContainerHeight}, 500);
            $('#screenThree').animate({top: '0px'}, 500);
        });

        $('#pickedFour').click(function() {
            $('.screens').animate({top: -2 * mainContainerHeight}, 500);
            $('#screenFour').animate({top: '0px'}, 500);
        });

        $('#pickedFive').click(function() {
            $('.screens').animate({top: -2 * mainContainerHeight}, 500);
            $('#screenFive').animate({top: '0px'}, 500);
        });

    }

//
// Call the sizing function once the document is loaded ..
// 

    resizeMySite();

//
// Call the sizing function if the window is ever re-sized!!! ..
// 

    $(window).resize(function() {
        resizeMySite();
    });



});


