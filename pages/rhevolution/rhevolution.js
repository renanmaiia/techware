// Carousel Depoimentos
$('.biocard').owlCarousel({
  items: 2,
  loop:false,
  margin:30,
  nav:true,
  dots:false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:2
    }
  }
});

// Carousel Biometria
$('.testimonial').owlCarousel({
  items: 1,
  loop:true,
  margin:40,
  nav:true,
  dots:false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
});

// Carousel Biometria
$('.categorias').owlCarousel({
  items: 1,
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:4
    }
  }
});

// Arrastar conteudo
var lineTime = document.querySelector('.line-time');
var isDown = false;
var startX;
var scrollLeft;

lineTime.addEventListener('mousedown', function (e) {
  isDown = true;
  startX = e.pageX - lineTime.offsetLeft;
  scrollLeft = lineTime.scrollLeft;
});

lineTime.addEventListener('mouseleave', function () {
  isDown = false;
});

lineTime.addEventListener('mouseup', function () {
  isDown = false;
});

lineTime.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - lineTime.offsetLeft;
  var walk = (x - startX) * 1;
  lineTime.scrollLeft = scrollLeft - walk;
});

