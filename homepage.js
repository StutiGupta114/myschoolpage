$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 50,
        nav: true,
        items: 4,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
function checkButton(){
var secondsBeforeExpire = 10;
var timer = setInterval(function(){
document.getElementById("btnactive").disabled =false;
if(secondsBeforeExpire <= 0){
    document.getElementById("btnactive").disabled == true ? false : true;
    if(document.getElementById("btnactive").disabled == true)
        document.getElementById("btnactive").style.background = "grey";
    else
        document.getElementById("btnactive").style.background = "orange";
    clearInterval(timer);
    checkButton();
}
else{
    secondsBeforeExpire--;
    if(document.getElementById("btnactive").disabled == true)
        document.getElementById('set-timer').innerText = "Button would be re-activated in " + (secondsBeforeExpire/60).toFixed() + " Minutes and " + secondsBeforeExpire%60 + " Seconds";  
    else 
        document.getElementById('set-timer').innerText = "Button would be de-activated in " + secondsBeforeExpire;
    //console.log(secondsBeforeExpire); 
}
},1000);
}
checkButton();
$(window).scroll(function(){
if($(window).scrollTop() > 100){
    $('#sticky-bar').removeClass('invisible');
    $('#sticky-bar').addClass('visible');
    $('#sticky-bar').addClass('navbar-fixed');
    //console.log("here");    
}
else if ($(window).scrollTop() < 100){
    $('#sticky-bar').addClass('invisible');
    $('#sticky-bar').removeClass('visible');
    $('#sticky-bar').removeClass('navbar-fixed');
}
})
});