$(document).ready(function () {

    function hashchange() {

        $('#vce').empty();
        if (location.hash == '') {
            $('#vce').load("start.html");
        }
        else if (location.hash == '#Wbottoms') {
            $('#vce').load("Wbottoms.html");
        }

        console.log(location.hash)
    }

    $(window).on("hashchange", hashchange);

    hashchange();
    /*
        function onload(){
            $('#norm1coll').click(function () {

                $('#vce').empty();
                $('#vce').load("Wbottoms.html");
            })
        }
        $('#vce').load("start.html",onload);

    */


})

