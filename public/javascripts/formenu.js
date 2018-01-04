$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");


});


function close() {

    $('#navToggle').removeClass('active')
    $(".overlay").removeClass("open");

}



