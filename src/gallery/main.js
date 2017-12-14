var image = document.querySelectorAll('.gallery__images-item') // toma todos los elementos

console.log('cambio')
console.log(image)
console.log(image[0])
console.log(image[5])

image[0].classList.remove('gallery__images-item--selected')
image[7].classList.add('gallery__images-item--selected')

console.log(image[0])
console.log(image[5])
// console.log(image)
