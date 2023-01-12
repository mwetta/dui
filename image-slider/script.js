let slides = document.querySelectorAll(".image");
slides.forEach(slide=>slide.classList.add("hidden"));
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;

const forwardButton = document.querySelector("#forward");
forwardButton.addEventListener('click', () => {
    goForward();
})

const backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {
    goBackward();
})

dots.forEach((dot, index)=> {
    dot.setAttribute('id', index);
    dot.addEventListener('click', () => {
        goToSlide(index);
    })
});

const goToSlide = (index) => {
    slides[slideIndex].classList.add("hidden");
    dots[slideIndex].classList.remove("active");
    slides[index].classList.remove("hidden");
    dots[index].classList.add("active");
    slideIndex = index;
    
}

const goForward = () => {
    if (slideIndex > slides.length-2) {
        slides[slideIndex].classList.add("hidden");
        dots[slideIndex].classList.remove("active");
        slideIndex = 0;
        goToSlide(0);
    } else {
    goToSlide(slideIndex+1);}
}

const goBackward = () => {
    if (slideIndex == 0) {
       goToSlide(slides.length-1);
    } else {
        goToSlide(slideIndex-1);
    }
}

goToSlide(slideIndex);

setInterval(goForward, 4000);

// goToSlide 
    // click on dot
    // current image will be hidden
    // target image will be shown
// goForward
    // click on forward arrow
    // current image will be hidden
    // next image will be shown
// goBackward
    // click on backward arrow
    // current image will be hidden
    // previous image will be shown
// progress
    // at a specified interval
    // current image will be hidden
    // next image will be shown
    // happens on each function
