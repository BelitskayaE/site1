
$("form").submit(function(e) {

   e.preventDefault();
    //var registerForm = document.forms["emailforma"];
    //console.log(registerForm);
   // var userName = registerForm.elements["#inputt"].value;


    var inputt=$('#emailforma #inputt').val();


    $.ajax({
        type: "POST",
        url: "/user",
        data: JSON.stringify({userName: inputt}),
        dataType: "json",
        contentType: "application/json",
        success: function(data){
            console.log(data);

        }

    });
    close();
});