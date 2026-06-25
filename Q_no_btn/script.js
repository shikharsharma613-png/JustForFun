const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Initial position of NO button
noBtn.style.left = `${window.innerWidth / 2 + 70}px`;
noBtn.style.top = `${window.innerHeight / 2}px`;

// Move button randomly
function moveButton(){

    const margin = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - margin;
    const maxY = window.innerHeight - noBtn.offsetHeight - margin;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Escape when mouse gets close
document.addEventListener("mousemove", function(e){

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < 170){
        moveButton();
    }

});

// Mobile support
noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();
    moveButton();

});

// Just in case someone clicks it
noBtn.addEventListener("click", function(e){

    e.preventDefault();
    moveButton();

});

// YES button
yesBtn.addEventListener("click", function(){

    popup.style.display = "flex";

});

// Close popup
closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});

// Close when clicking outside popup
popup.addEventListener("click", function(e){

    if(e.target === popup){
        popup.style.display = "none";
    }

});