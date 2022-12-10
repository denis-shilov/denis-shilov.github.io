const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clerActiveClasses()

    slide.classList.add('active')
  })
}

function clerActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}  