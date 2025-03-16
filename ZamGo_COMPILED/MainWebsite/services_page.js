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
    const hotels = [
        {
            name: "Marcian Garden Hotel",
            image: "https://lh3.googleusercontent.com/p/AF1QipP66DKpNMNSUdLSu8NaDeOILnxRAhPUGBZSy635=s680-w680-h510",
            description: "A stylish hotel with luxurious amenities, offering comfort and convenience in the heart of Zamboanga City."
        },
        {
            name: "Grand Astoria Hotel",
            image: "https://pix10.agoda.net/hotelImages/569/569627/569627_14090514020021892810.jpg?ca=2&ce=1&s=414x232&ar=16x9",
            description: "A well-known hotel providing modern facilities and easy access to the city's main attractions."
        },
        {
            name: "Ever O Hotel",
            image: "https://pix10.agoda.net/hotelImages/107/1077486/1077486_15111613380037766252.jpg?ca=&ce=1&s=1024x768",
            description: "A budget-friendly hotel offering comfortable accommodations with great city views."
        }
    ];

    let currentHotelIndex = 0;

    function updateHotel() {
        const hotelImage = document.getElementById("hotel-image");
        const hotelName = document.getElementById("hotel-name");
        const hotelDescription = document.getElementById("hotel-description");

        hotelImage.src = hotels[currentHotelIndex].image;
        hotelName.textContent = hotels[currentHotelIndex].name;
        hotelDescription.textContent = hotels[currentHotelIndex].description;
    }

    window.nextHotel = function () {
        currentHotelIndex = (currentHotelIndex + 1) % hotels.length;
        updateHotel();
    };

    window.prevHotel = function () {
        currentHotelIndex = (currentHotelIndex - 1 + hotels.length) % hotels.length;
        updateHotel();
    };

    updateHotel(); 
});
