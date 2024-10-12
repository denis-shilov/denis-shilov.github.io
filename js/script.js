window.onscroll = function () {
  changeNavbarColor();
  changeSizeLogo();
};

function changeNavbarColor() {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Добавляем класс при прокрутке
  } else {
    navbar.classList.remove("scrolled"); // Убираем класс, если вернулись наверх
  }
}

function changeSizeLogo() {
  const navbar = document.getElementById("logo");

  if (window.scrollY > 50) {
    logo.classList.add("logo_scrolled"); // Добавляем класс при прокрутке
  } else {
    logo.classList.remove("logo_scrolled"); // Убираем класс, если вернулись наверх
  }
}


$(document).ready(function(){
  $('.slider').slick({
    setting-name: setting-value
  });
});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});