/*$(document).ready(function() {


    $('#btn').click(function () {

        if($('#container').attr("opened") == "false" || $('#container').attr("opened") == undefined) {
            $('#container').animate(
                {left: "0px",


            }, 200)

            $('#container').attr("opened", "true");


        } else {
            $('#container').animate(
                {left: "-660px",

            }, 200)



            $('#container').attr("opened", "false");
        }


















        if($('#container').attr("opened") == "false" || $('#container').attr("opened") == undefined) {

            $('.fade').animate({

          left:"0"



            }, 200); //скорость движения меню в мс
            $('.fade').attr("opened", "true");
        }

        else {
            $('.fade').animate({

           left:"25%"



            }, 200); //скорость движения меню в мс
            $('.fade').attr("opened", "false");
        }







        if($('#container').attr("opened") == "false" || $('#container').attr("opened") == undefined) {

            $('#vidos').animate({

                left: "-500px"


            }, 200); //скорость движения меню в мс
            $('#vidos').attr("opened", "true");
        }

        else {
            $('#vidos').animate({

                left: "0px"


            }, 200); //скорость движения меню в мс
            $('#vidos').attr("opened", "false");
        }








    })
})
*\
