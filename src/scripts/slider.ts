const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')
const sliderContainer = document.querySelector('.slider-container')

let index = 1
const allSlides = document.querySelectorAll('.slide')

if (nextButton && prevButton) {
  nextButton.addEventListener('click', () => {
    allSlides.forEach((slide) => {
      slide.classList.remove('active')
      slide.classList.remove('prev')
      slide.classList.remove('next')
    })
    index++
    if (index > allSlides.length - 1) {
      index = 0
      allSlides[allSlides.length - 1].classList.add('prev')
    } else {
      allSlides[index - 1].classList.add('prev')
    }
    if (index + 1 > allSlides.length - 1) {
      allSlides[0].classList.add('next')
    }
    if (index + 1 <= allSlides.length - 1) {
      allSlides[index + 1].classList.add('next')
    }
    allSlides[index].classList.add('active')
  })

  prevButton.addEventListener('click', () => {
    allSlides.forEach((slide) => {
      slide.classList.remove('active')
      slide.classList.remove('prev')
      slide.classList.remove('next')
    })
    index--
    if (index < 0) {
      index = allSlides.length - 1
      allSlides[0].classList.add('next')
    } else {
      allSlides[index + 1].classList.add('next')
    }
    if (index - 1 < 0) {
      allSlides[allSlides.length - 1].classList.add('prev')
    } else {
      allSlides[index - 1].classList.add('prev')
    }
    allSlides[index].classList.add('active')
  })
}

window.addEventListener('resize', () => {
  const activeSlide = document.querySelector('.slide.active')
  sliderContainer?.setAttribute(
    'style',
    `height: ${activeSlide?.clientHeight.toString()}px;` || '0px'
  )
})

window.addEventListener('load', () => {
  const activeSlide = document.querySelector('.slide.active')
  sliderContainer?.setAttribute(
    'style',
    `height: ${activeSlide?.clientHeight.toString()}px;` || '0px'
  )
})
