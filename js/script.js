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
  showScrollButton();
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
  const logo = document.getElementById("logo");

  if (window.scrollY > 50) {
    logo.classList.add("logo_scrolled"); // Добавляем класс при прокрутке
  } else {
    logo.classList.remove("logo_scrolled"); // Убираем класс, если вернулись наверх
  }
}

function showScrollButton() {
  const button = document.getElementById("scrollUp");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "flex"; // Показываем кнопку
  } else {
    button.style.display = "none"; // Скрываем кнопку
  }
}

// Плавная прокрутка наверх
document.getElementById("scrollUp").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
});
