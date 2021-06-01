const france = document.querySelector('#france');
const italie = document.querySelector('#italie');
const turquie = document.querySelector('#turquie');
const canada = document.querySelector('#canada');
const section  = document.querySelector('.presentation');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo a');
const liensFrance = document.querySelector('#france a');
const liensItalie = document.querySelector('#italie a');
const liensTurquie = document.querySelector('#turquie a');
const liensCanada = document.querySelector('#canada a');
const text = document.querySelector('.presentation .wrapper h1'); 


france.addEventListener('mouseover', () => {
    section.style.backgroundImage = "url('img/france.jpg')";
    header.style.backgroundColor = "transparent";
    logo.classList.add("active");
    text.classList.add("active");
    liensFrance.classList.add("active");
    liensItalie.classList.remove("active");
    liensTurquie.classList.remove("active");
    liensCanada.classList.remove("active");
});


italie.addEventListener('mouseover', () => {
    section.style.backgroundImage = "url('img/italie.jpg')";
    header.style.backgroundColor = "transparent";
    logo.classList.add("active");
    text.classList.add("active");
    liensItalie.classList.add("active");
    liensFrance.classList.remove("active");
    liensTurquie.classList.remove("active");
    liensCanada.classList.remove("active");
});


turquie.addEventListener('mouseover', () => {
    section.style.backgroundImage = "url('img/turquie.jpg')";
    header.style.backgroundColor = "transparent";
    logo.classList.add("active");
    text.classList.add("active");
    liensTurquie.classList.add("active");
    liensFrance.classList.remove("active");
    liensItalie.classList.remove("active");
    liensCanada.classList.remove("active");
});

canada.addEventListener('mouseover', () => {
    section.style.backgroundImage = "url('img/canada.jpg')";
    header.style.backgroundColor = "transparent";
    logo.classList.add("active");
    text.classList.add("active");
    liensCanada.classList.add("active");
    liensItalie.classList.remove("active");
    liensFrance.classList.remove("active");
    liensTurquie.classList.remove("active");
});

logo.addEventListener('mouseover', () => {
    section.style.backgroundImage = "url('img/black-texture\(1\).jpg')";
    logo.classList.remove("active");
    text.classList.remove("active");
    liensItalie.classList.remove("active");
    liensFrance.classList.remove("active");
    liensTurquie.classList.remove("active");
    liensCanada.classList.remove("active");
});

