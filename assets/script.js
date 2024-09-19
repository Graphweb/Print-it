const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables globales
let currentSlide = 0;

// Sélecteurs
const bannerImg = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Créer les dots
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("dot_selected");
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
    dotsContainer.appendChild(dot);
});

// Mettre à jour le slide //
function updateSlide() {
    bannerImg.src = slides[currentSlide].image;
    bannerTagLine.innerHTML = slides[currentSlide].tagLine;

    // Mettre à jour les dots
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentSlide);
    });
}


// Événement pour la flèche gauche (précédente) //
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('click', () => {
    console.log("Flèche gauche cliquée"); // Ajoute un log pour vérifier que le clic est pris en compte
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide();
});

// Événement pour la flèche droite (suivante)
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', () => {
    console.log("Flèche droite cliquée"); // Ajoute un log pour vérifier que le clic est pris en compte
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
});
    updateSlide();
