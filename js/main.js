// Loader hide after page load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typewriter Animation
const text = ["JEFF MUTURI", "Web Developer", "Creative DJ"];
let count = 0,
  index = 0,
  currentText = "",
  letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typewriter").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 150);
  }
})();

// Visitor Count (Demo random number)
document.getElementById("visitor-count").textContent =
  Math.floor(Math.random() * 5000) + 1000;

// Theme Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light-theme");
};

// Floating Music Player Autoplay
const audio = document.querySelector("#music-player audio");
audio.volume = 0.6;

// Animate skill bars when page loads
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-bar .bar").forEach((bar) => {
    const width = bar.classList.contains("html-css")
      ? "95%"
      : bar.classList.contains("php")
      ? "85%"
      : bar.classList.contains("js-node")
      ? "80%"
      : bar.classList.contains("python")
      ? "70%"
      : "0";
    bar.style.width = width;
  });
});
