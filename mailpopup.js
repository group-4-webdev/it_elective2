document.querySelector("#signup").addEventListener("submit", function(event) {
    event.preventDefault();
    
 
 
document.getElementById("popup").style.display = "flex";
});



document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
