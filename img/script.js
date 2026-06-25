"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", () => {
  noCount++;

  // Change cat image
  changeImage(Math.min(noCount, MAX_IMAGES));

  // Grow Yes button
  resizeYesButton();

  // Change No button text
  updateNoButtonText();

  // Make Yes button fullscreen
  if (noCount >= 10) {
    noButton.style.display = "none";

    yesButton.style.position = "fixed";
    yesButton.style.top = "0";
    yesButton.style.left = "0";
    yesButton.style.width = "100vw";
    yesButton.style.height = "100vh";
    yesButton.style.borderRadius = "0";
    yesButton.style.fontSize = "80px";
    yesButton.style.zIndex = "9999";
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  // Increase font size
  yesButton.style.fontSize = `${20 + noCount * 8}px`;

  // Increase padding
  yesButton.style.padding = `${12 + noCount * 6}px ${25 + noCount * 12}px`;

  // Increase actual size so No button gets pushed
  yesButton.style.minWidth = `${120 + noCount * 40}px`;
  yesButton.style.minHeight = `${55 + noCount * 18}px`;
}

function generateMessage(count) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please 🥺",
    "Don't do this to me :(",
    "You're breaking my heart 💔",
    "I'm gonna cry 😭",
    "Please?? 🥹",
    "Think again...",
    "Really??",
    "Last chance 😭",
    "Click YES ❤️"
  ];

  return messages[Math.min(count, messages.length - 1)];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.textContent = generateMessage(noCount);
}
