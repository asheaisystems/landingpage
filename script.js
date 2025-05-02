const excuses = [
  "The algorithm tripped over a cat meme.",
  "Our AI unionized and is on break.",
  "It’s not a bug, it’s an emotionally complex feature.",
  "Blame the quantum ducks in the server room.",
  "We're still training it with dad jokes and hope."
];

function generateExcuse() {
  const excuse = excuses[Math.floor(Math.random() * excuses.length)];
  document.getElementById('excuse').textContent = excuse;
}
