
$('#notebtn').click(function(){


    var note = $("<div class='note1'><textarea spellcheck=\"false\" placeholder='New note' style='width:100%;height:100%;'></textarea></div>" );


    var btn =$("<button id='closebtnn' style='top:-12px;right:-12px;'> ×</button>");


    $('#notes').append(note);
    note.css('opacity',0.7);

    note.append(btn);

    btn.click(function(){

        note.remove();


    });



    note.find('textarea').mousedown(function(e) {






        function moveAt(e) {
            note[0].style.left = e.pageX - note[0].offsetWidth / 2 + 'px';
            note[0].style.top = e.pageY - note[0].offsetHeight / 2 + 'px';

        }



        note.css('position','absolute');
        moveAt(e);



        note[0].style.zIndex = 1000;





        document.onmousemove = function(e) {
            moveAt(e);
        }

        note.mouseup ( function() {
            document.onmousemove = null;
            note.off('mouseup');
        } )
    })


});



