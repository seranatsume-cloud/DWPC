window.onload = () => {
  const glitch = document.getElementById("glitch");

  glitch.style.opacity = 1;

  setTimeout(() => {
    glitch.style.opacity = 0;
  }, 200);

  // ランダムノイズ
  setInterval(() => {
    glitch.style.opacity = Math.random() * 0.2;
  }, 100);
};