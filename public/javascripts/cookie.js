
$(document).ready(function(){



    if ( $.cookie('visit') == undefined ) {

        $.cookie('visit', true);



        setTimeout(function () {
            $("#navToggle").toggleClass("active");
            $(".overlay").toggleClass("open");

        }, 10000)

    }


})