
$(document).ready(function() {


    $("#vopros").click(function() {

        $('#voprosform').toggleClass("open");
        if ($('#voprosform').hasClass("open")) {



            $('#voprosform').addClass('slideInDown');
            $('#voprosform').removeClass('zoomOutUp');
            $('#voprosform').css('display','block');
        }


        else {
            $('#voprosform').removeClass('slideInDown');

            $('#voprosform').addClass('zoomOutUp');

        }


    })


    $("#submit").click(function() {


        $('#voprosform').removeClass('slideInDown');

        $('#voprosform').addClass('zoomOutUp');

    })






})