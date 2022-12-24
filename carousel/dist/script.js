const sliderContainerEl = document.querySelector('.slider-container')
const slidersEl = document.querySelector('.sliders')

const nextBtnEl = document.querySelector('.next-btn')
const prevBtnEl = document.querySelector('.prev-btn')

var slides = new Array(...slidersEl.children)

prevBtnEl.addEventListener('click', ()=>{

    prev()
    renderSlides()
})

nextBtnEl.addEventListener('click', ()=>{
    next()
    renderSlides()
})



function next(){
    let len = slides.length
    let temp0 = slides[0]
    for(let i=1;i<len;i++){
        slides[i-1] = slides[i]
    }
    slides.splice(len-1,1,temp0)
}


function prev(){
    let len =slides.length
    let tempN = slides[len-1]
    for(let i=len-1;i>0;i--){
        slides[i] = slides[i-1]
    }
    slides[0] = tempN
}

function renderSlides(){
    slidersEl.childNodes = null
    for( const slide of slides){
        slidersEl.appendChild(slide)
    }
}