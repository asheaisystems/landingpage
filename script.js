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

// Sound toggle
const audio = document.getElementById("bgMusic");
const button = document.getElementById("soundToggle");
let playing = false;

button.addEventListener("click", async () => {
  try {
    if (!playing) {
      await audio.play();
      button.textContent = "🔊 Sound: On";
      playing = true;
    } else {
      audio.pause();
      button.textContent = "🔇 Sound: Off";
      playing = false;
    }
  } catch (e) {
    console.error("Playback failed:", e);
    alert("Audio playback failed. Try clicking again.");
  }
});
