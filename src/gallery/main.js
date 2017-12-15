var pos = 0;

var image = document.querySelectorAll('.gallery__images-item') // toma todos los elementos
var rightbtn = document.querySelector('.gallery__control-right')
rightbtn.addEventListener("click",next)
var leftbtn = document.querySelector('.gallery__control-left')
leftbtn.addEventListener("click",back)
var dots = document.querySelectorAll('.gallery__dots-button') 
//dots.addEventListener("click",next)


function next(){
    if (pos >=0 && pos < image.length-1) {
            if (pos === 0){
                leftbtn.classList.add('gallery__control--disabled')
            }
            if (pos === image.length-1){
                rightbtn.classList.add('gallery__control--disabled')
            }
        image[pos].classList.remove('gallery__images-item--selected')
        pos = pos+1
        leftbtn.classList.remove('gallery__control--disabled')
        image[pos].classList.add('gallery__images-item--selected')
        console.log(image[pos])
    }
}

function back(){
    if (pos > 0 && pos <= image.length-1) {
        /*function disabledbtn(){
            if (pos == 0){
                leftbtn.classList.add('gallery__control-left--disabled')
            }
            else{
                leftbtn.classList.remove('gallery__control-left--disabled')
            }
            if (pos == image.length-1){
                rightbtn.classList.add('gallery__control-right--disabled')
            }
            else{
                rigthbtn.classList.remove('gallery__control-rigth--disabled')
            }
            console.log(pos)
        }*/
        image[pos].classList.remove('gallery__images-item--selected')
        pos = pos-1
        image[pos].classList.add('gallery__images-item--selected')
        console.log(image[pos])
    }
}
/*function disabledbtn(){
    if (pos === 0){
        leftbtn.classList.add('gallery__control-left--disabled')
    }
    if (pos === image.length-1){
        rigthbtn.classList.add('gallery__control-rigth--disabled')
    }
}*/
