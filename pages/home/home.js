// Carousel Depoimentos
$('.testimonial').owlCarousel({
  items: 1,
  loop: true,
  margin: 40,
  nav: true,
  dots: false,
  navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
});

//Video play

function startVideo() {
  document.getElementById('video').click()
}

function startVideo() {
  document.getElementById('tumblr-video').style = 'display: none'
  document.getElementById('video').style = 'display: block'
  setTimeout(() => {
    startVideo()
  }, 1000);
}
