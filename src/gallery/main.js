var position = 0
var images = document.querySelectorAll('.gallery__images-item') // toma todos los elementos
images[position].classList.add('gallery__images-item--selected')
var rightBtn = document.querySelector('.gallery__control-right')
rightBtn.addEventListener('click', next)
var leftBtn = document.querySelector('.gallery__control-left')
leftBtn.addEventListener('click', back)
disabledBtn()
var dots = document.querySelectorAll('.gallery__dot-button')
dots[position].classList.add('gallery__dot-button--selected')

// dots.addEventListener("click",next)

function next () {
  if (position >= 0 && position < images.length - 1) {
    images[position].classList.remove('gallery__images-item--selected')
    position = position + 1
    leftBtn.classList.remove('gallery__control--disabled')
    images[position].classList.add('gallery__images-item--selected')
    disabledBtn()
  }
}

function back () {
  if (position > 0 && position <= images.length - 1) {
    images[position].classList.remove('gallery__images-item--selected')
    position = position - 1
    images[position].classList.add('gallery__images-item--selected')
    disabledBtn()
  }
}
function disabledBtn () {
  if (position === 0) {
    leftBtn.classList.add('gallery__control--disabled')
  } else if (position === images.length - 1) {
    rightBtn.classList.add('gallery__control--disabled')
  } else {
    leftBtn.classList.remove('gallery__control--disabled')
    rightBtn.classList.remove('gallery__control--disabled')
  }
}
