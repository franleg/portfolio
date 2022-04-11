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
                scrollTop: $("#sobreMi").offset().top -115},1500)
            break;
        case "Portfolio":
            $("html, body").animate({
                scrollTop: $("#portfolio").offset().top -115},1500)
            break;
        case "Contacto":
            $("html, body").animate({
                scrollTop: $("#contacto").offset().top -115},1500)
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

particlesJS(
    {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": false,
            "value_area": 1000
          }
        },
        "color": {
          "value": "#10575b"
        },
        "shape": {
          "type": "image",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "assets/img/num.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.11,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 16,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 64,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "right",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
)