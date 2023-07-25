// Font size + e -
function changeFontSize(delta) {
  var htmlElement = document.getElementsByTagName("html")[0];
  if (delta > 0) {
    htmlElement.classList.add("font-lg");
  } else {
    htmlElement.classList.remove("font-lg");
  }
}

// Navbar fixo
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navbarHeight = navbar.offsetHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > navbarHeight) {
    navbar.classList.add('navbar-sticky-on');
  } else {
    navbar.classList.remove('navbar-sticky-on');
  }
});

// Menu mobile - animação icon
function toggleNavbar() {
  const navbarToggler = document.querySelector('.navbar-toggler-animation');
  navbarToggler.classList.toggle('active');
}

// Para navegadores que não suportam scroll-behavior: smooth
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Search menu
var searchIcon = document.querySelector('.search_icon');
var searchbar = document.querySelector('.searchbar');
var searchInput = searchbar.querySelector('.search_input');

searchIcon.addEventListener('click', function(e) {
  e.preventDefault();
  searchbar.classList.toggle('active');
  if (searchbar.classList.contains('active')) {
    setTimeout(function() {
      searchInput.focus();
    }, 300);
  } else {
    searchInput.value = ''; // Limpar o valor do campo de pesquisa
  }
});

searchInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    // Impede que o Enter feche o campo de pesquisa
    e.preventDefault();
  }
});

document.addEventListener('click', function(e) {
  var target = e.target;
  if (!target.closest('.searchbar') && searchbar.classList.contains('active')) {
    searchbar.classList.remove('active');
    searchInput.value = ''; // Limpar o valor do campo de pesquisa
  }
});

// Contagem automatica
var speed = 10;

function incEltNbr() {
  var elements = document.querySelectorAll('[data-nbr]');
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var spanElement = entry.target.querySelector('span');
        var endNbr = Number(spanElement.innerHTML);
        incNbrRec(0, endNbr, spanElement);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(function(element) {
    observer.observe(element);
  });
}

function incNbrRec(i, endNbr, spanElement) {
  if (i <= endNbr) {
    spanElement.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, spanElement);
    }, speed);
  }
}

incEltNbr();
