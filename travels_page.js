document.addEventListener("DOMContentLoaded", function () {
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
    changeQuote();
});

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});