// Carousel Clientes
$('.clientes-logo').owlCarousel({
  items: 4,
  loop:true,
  margin:40,
  nav:true,
  dots:false,
  autoWidth:false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
  }
});

// Carousel Depoimentos
$('.testimonial').owlCarousel({
  items: 1,
  loop:true,
  margin:40,
  nav:true,
  dots:false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
});