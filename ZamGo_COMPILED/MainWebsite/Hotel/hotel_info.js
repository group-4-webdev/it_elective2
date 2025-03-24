document.addEventListener("DOMContentLoaded", function () {
    
    const gallery = document.querySelector(".image-gallery");
    let scrollAmount = 0;
    const scrollStep = 300;
    const scrollInterval = 3000; 

    function autoScrollGallery() {
        if (gallery) {
            scrollAmount += scrollStep;
            if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
                scrollAmount = 0;
            }
            gallery.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }

    setInterval(autoScrollGallery, scrollInterval);

   
    const images = document.querySelectorAll(".image-gallery img");
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    document.body.appendChild(overlay);

    images.forEach(img => {
        img.addEventListener("click", function () {
            const enlargedImg = document.createElement("img");
            enlargedImg.src = this.src;
            enlargedImg.classList.add("enlarged-img");
            overlay.innerHTML = "";
            overlay.appendChild(enlargedImg);
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
    });
});
