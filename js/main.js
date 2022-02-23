$(document).ready(function(){

   


    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ],
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  

    function setClock(){
        var date = new Date(),
        second  = date.getSeconds() ,
        minute  = date.getMinutes() ,
        hour    = date.getHours() ,
        time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true }),
        day =  date.getDay() ,
        month = date.getMonth() ,
        
        ds = second * -6,
        dm = minute * -6,
        dh = hour * -30,
        ma = month * -2,
        da = day * -2;
        
       

    //rotate clockwise with css
    $('.second').css('transform', 'rotate(' + ds + 'deg)');
    $('.minute').css('transform', 'rotate(' + dm + 'deg)');
    $('.hour').css('transform', 'rotate(' + dh + 'deg)');

    $('.day').text(days[day]).css('transform', 'rotate(' + da + 'deg)');
    $('.year').text(months[month]).css('transform', 'rotate(' + ma + 'deg)');

}

//minute and second 360deg rotate for span
function setRotation(selector , size){
    for(var s = 0; s < 60 ; s++){
        $(selector).append('<span style="transform: rotate('+ 6 * s +'deg) translateX('+ size +'px)">'+s+'</span>')
    }
}

setRotation( '.second' , 160);
setRotation( '.minute' , 127);


//hour 360deg rotate for span
for(var s = 1; s < 13 ; s++){
    $('.hour').append('<span style="transform: rotate('+ 30 * s +'deg) translateX(90px)">'+s+'</span>')
  };

 


  setInterval(setClock, 1000);
  
});