$(document).ready(function(){

    var HeaderTop = $('#container').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop )
        {    $('#container').css({position: 'fixed', top: '0px'});
        } else {
            $('#contaiber').css({position: 'static'});
        }
    });
});
