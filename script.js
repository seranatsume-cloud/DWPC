window.onload = () => {
  const glitch = document.getElementById("glitch");

  // 起動時ノイズ
  glitch.style.opacity = 1;

  setTimeout(() => {
    glitch.style.opacity = 0;
  }, 100);

  // フラッシュを何回か繰り返す
  let count = 0;
  let interval = setInterval(() => {
    glitch.style.opacity = Math.random();

    count++;
    if (count > 10) {
      glitch.style.opacity = 0;
      clearInterval(interval);
    }
  }, 50);
};
