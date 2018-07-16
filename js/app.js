var activeSlide = 1;

function slideChanger() {
    var a = document.getElementById("second__slide");
    var b = document.getElementById("first__slide");

    if (activeSlide === 1) {
        a.classList.add("active");
        b.classList.remove("active");
        activeSlide = 2;
    }
    else if (activeSlide === 2) {
        b.classList.add("active");
        a.classList.remove("active");
        activeSlide = 1;
    }
}