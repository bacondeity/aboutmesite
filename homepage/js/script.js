
const topButton = document.getElementById("topButton");

// Scroll back to the top when the button is clicked.
if (topButton) {
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Log a message when the page loads.
console.log("Welcome to my personal website!");

// Music player
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

// Only run this code if both music elements exist.
if (music && musicButton) {

  musicButton.addEventListener("click", function () {

    if (music.paused) {
      music.play();
      musicButton.textContent = "Pause Music";
    }
    else {
      music.pause();
      musicButton.textContent = "Play Music";
    }

  });
}

// Random Meme Generator
const randomMemeButton = document.getElementById("random-meme-button");
const memePopup = document.getElementById("meme-popup");
const randomMemeImage = document.getElementById("random-meme-image");
const closeMemePopup = document.getElementById("close-meme-popup");

// Store the meme image paths in an array.
const memes = [
  "img/meme1.jpg",
  "img/meme2.jpg",
  "img/meme3.jpg",
  "img/meme4.jpg",
  "img/meme5.jpg",
  "img/meme6.jpg",
  "img/meme7.jpg",
  "img/meme8.jpg",
  "img/meme9.jpg",
  "img/meme10.jpg",
  "img/meme11.jpg",
  "img/meme12.jpg",
  "img/meme13.jpg",
  "img/meme14.jpg",
  "img/meme15.jpg",
  "img/meme16.jpg",
  "img/meme17.jpg",
  "img/meme18.jpg",
  "img/meme19.jpg",
  "img/meme20.jpg"
];

// Check if the meme generator exists on the current page.
if (randomMemeButton && memePopup && randomMemeImage && closeMemePopup) {

  // Select and display a random meme.
  randomMemeButton.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * memes.length);

    randomMemeImage.src = memes[randomIndex];

    memePopup.style.display = "flex";
  });

  // Close the popup.
  closeMemePopup.addEventListener("click", function() {
    memePopup.style.display = "none";
  });

  // Close the popup when clicking outside the image.
  memePopup.addEventListener("click", function(event) {
    if (event.target === memePopup) {
      memePopup.style.display = "none";
    }
  });
}
