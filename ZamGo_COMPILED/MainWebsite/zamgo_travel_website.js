const quotes = [
    "Explore Zamboanga City with ZamGo!",
    "Discover new destinations today!",
    "Plan your next adventure with us!",
    "Find the best hotels and places to visit!",
    "“Can we just skip to the part of my life where I travel the world?” – Unknown",
    "“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta",
    "“Jobs fill your pocket, but adventures fill your soul.” – Jamie Lyn Beatty",
    "“Life is short and the world is wide.” – Unknown",
    "“Live your life by a compass not a clock.” – Stephen Covey",
    "“Take only memories, leave only footprints.” – Chief Seattle"
];

let quoteIndex = 0;

function changeQuote() {
    const quoteText = document.getElementById("quote-text");
    if (quoteText) {
        quoteText.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }
}

setInterval(changeQuote, 3000);

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none"); 
    slideIndex = (slideIndex + 1) % slides.length; 
    slides[slideIndex].style.display = "block"; 
    setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", showSlides);

let hotelIndex = 0;
const hotelSlides = document.querySelectorAll(".hotel-slide");

function showHotelSlides() {
    hotelSlides.forEach(slide => slide.style.display = "none"); 
    hotelIndex = (hotelIndex + 1) % hotelSlides.length; 
    hotelSlides[hotelIndex].style.display = "block"; 
    setTimeout(showHotelSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", showHotelSlides);