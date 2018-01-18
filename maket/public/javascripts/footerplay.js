$(document).ready(function () {


    $("#share").click(function () {

        $('.menu').toggleClass("open");
        if ($('.menu').hasClass("open")) {



            $('.menu').addClass('bounceInDown');
            $('.menu').removeClass('bounceOutUp');
            $('.menu').css('display','block');
        }


        else {
           $('.menu').removeClass('bounceInDown');

             $('.menu').addClass('bounceOutUp');

        }


    })


})