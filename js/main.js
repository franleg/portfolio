$(document).ready(function(){
  $('a').hover(function(){
    $('small', this).removeClass('text-muted');
  }, function(e) {
    $('small', this).addClass('text-muted');
  });
});

$(".navLink").click(function(e) {
    e.preventDefault();
    let goTitle = e.target.innerText;
    switch (goTitle) {
        case "Sobre Mi":
            $("html, body").animate({
                scrollTop: $("#sobreMi").offset().top -290},1500);
                showMenu();
                animateBars();
            break;
        case "Portfolio":
            $("html, body").animate({
                scrollTop: $("#portfolio").offset().top -290},1500);
                showMenu();
                animateBars();
            break;
        case "Contacto":
            $("html, body").animate({
                scrollTop: $("#contacto").offset().top -290},1500);
                showMenu();
                animateBars();
            break;
    }
});

$("#button-contact").click(function(e) {
    e.preventDefault();
    let goContact = e.target.innetText;
    $("html,body").animate({
        scrollTop: $("#contacto").offset().top -115
    },1500);
});
