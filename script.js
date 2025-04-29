// Typing animation
const text = "Ashe AI Systems";
const typewriter = document.getElementById("typewriter");
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Audio toggle
const audio = document.getElementById("bgMusic");
const button = document.getElementById("soundToggle");
let playing = false;

button.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    audio.muted = false;
    button.textContent = "🔊 Sound: On";
    playing = true;
  } else {
    audio.pause();
    button.textContent = "🔇 Sound: Off";
    playing = false;
  }
});