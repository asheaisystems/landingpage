body {
  margin: 0;
  background: radial-gradient(ellipse at center, #000 0%, #0a0a0a 100%);
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
  z-index: 2;
}

h1.glitch-text {
  font-size: 3rem;
  color: #00ffe7;
  text-shadow: 0 0 10px #00ffe7, 0 0 20px #ff00c1;
  animation: glitch 1.5s infinite;
}

@keyframes glitch {
  0%, 100% { text-shadow: 2px 2px #ff00c1, -2px -2px #00ffe7; }
  25% { text-shadow: -2px 2px #ff00c1, 2px -2px #00ffe7; }
  50% { text-shadow: 2px -2px #ff00c1, -2px 2px #00ffe7; }
  75% { text-shadow: -2px -2px #ff00c1, 2px 2px #00ffe7; }
}

.loading-bar {
  width: 300px;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px #00ffe7;
}

.loading-bar-inner {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #00ffe7, #ff00c1);
  animation: load 4s ease-in-out forwards;
}

@keyframes load {
  to { width: 100%; }
}

.gif {
  max-width: 300px;
  width: 80%;
  margin-top: 30px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px #00ffe7;
}

.gif:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px #ff00c1;
}

#soundToggle {
  margin-top: 20px;
  background: #111;
  color: #00ffe7;
  padding: 10px 20px;
  font-family: 'Orbitron', sans-serif;
  border: 1px solid #00ffe7;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 10px #00ffe7;
  transition: background 0.3s;
}

#soundToggle:hover {
  background: #00ffe7;
  color: #000;
}

.border-glow {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  box-shadow: inset 0 0 60px #00ffe7, inset 0 0 30px #ff00c1;
  animation: pulse 3s infinite ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.1);
  z-index: 0;
}

@keyframes pulse {
  0%, 100% { box-shadow: inset 0 0 40px #00ffe7, inset 0 0 20px #ff00c1; }
  50% { box-shadow: inset 0 0 80px #ff00c1, inset 0 0 40px #00ffe7; }
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/cubes.png');
  opacity: 0.03;
  z-index: 0;
}
