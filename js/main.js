$(document).ready( function () {

    function moveFromTop(div) {
        $(div).removeClass('off moveToTop').addClass('on moveFromTop');
        //$('.blur').show();
        //$('.overlay').show();
    }

    function moveFromBottom(div) {
        $(div).removeClass('off moveToBottom').addClass('on moveFromBottom');
    }

    function moveToTop(div) {
        $(div).removeClass('on moveFromTop').addClass('off moveToTop ');
    }

    function moveToBottom(div) {
        $(div).removeClass('on moveFromBottom').addClass('off moveToBottom ');
    }

    function moveFromRight(page_active, page_next) {
        $(page_active).removeClass('page-active moveFromLeft').addClass('page-next moveFromRight ');
        $(page_next).removeClass('page-next moveFromLeft' ).addClass('page-active moveFromRight ');
    }

    function moveFromLeft(page_active, page_prev) {
        $(page_active).removeClass('page-active moveFromRight').addClass(' moveToRight ');
        $(page_prev).removeClass('page-next moveFromRight').addClass('page-active  moveFromLeft ');
    }

    // Slide de page !demo sur lien slide
    $('#etape1 .btn_submit').click(function () {
        moveFromRight('#etape1' , '#etape2');

    });

    // Slide de page !demo sur lien retour
    $('#etape2 .btn_back').click(function () {
        moveFromLeft('#etape2' , '#etape1');

    });


    // Animation Error !demo sur le texte
    $('#etape1 p').click(function () {
        moveFromTop('#etape1 .error')
    });

    $('#etape2 .btn_submit').click(function () {
        moveFromTop('#etape2 .error')
    });


    // Animation Aide
    $('#etape1 .btn_help').click(function () {
        moveFromBottom('#etape1  .aide')
    });

    // Animation Aide
    $('#etape2 .btn_help').click(function () {
        moveFromBottom('#etape2  .aide')
    });

    // Fermeture sur
   $('.btn_close').click(function () {
        var parent = $(this).parent()
        if (parent.hasClass('error'))
            {
                moveToTop(parent);
            }

         if (parent.hasClass('aide'))
            {
               moveToBottom(parent);
            }
    });
});