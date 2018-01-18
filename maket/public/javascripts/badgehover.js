$(document).ready(function () {


    $(".badge").hover(
        function () {


            $(".badge").addClass('wobble')

        },

        function () {


            $(".badge").removeClass('wobble')

        }
    )


    $("#bell").hover(
        function () {


            $(".badge").addClass('wobble')

        },

        function () {


            $(".badge").removeClass('wobble')

        }
    )

    function bell_hide() {
        $(document).click(function () {
            $("#uvedom").css('display', 'none')
            $(document).off('click')
        })
    }

    $("#bell").click(
        function (e) {

            $(".badge").css('visibility', 'hidden');
            $("#uvedom").css('display', 'block')

            setTimeout(bell_hide, 20);

        }
    )





})