$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

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
