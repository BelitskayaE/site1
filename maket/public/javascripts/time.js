function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();


    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }


    if(hours<12 && hours>=0)
    {
        document.getElementById('time').innerHTML = hours + ':' + minutes + ' am';
    }






    if(hours>=12 && hours<24)
    {

        document.getElementById('time').innerHTML = hours + ':' + minutes + ' pm';


    }
}
setInterval(getDate, 0);


