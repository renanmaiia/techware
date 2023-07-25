

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