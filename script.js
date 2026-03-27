window.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.remove(); // 完全削除
      }, 800);
    });
  }

});
// ===== グリッチエフェクト =====
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll(".glitch-text").forEach(el => {
  let interval = null;
  const original = el.innerText;

  el.addEventListener("mouseenter", () => {
    let iteration = 0;

    interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return original[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= original.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // ←速さ調整（小さいほどゆっくり）
    }, 30);
  });

  el.addEventListener("mouseleave", () => {
    clearInterval(interval);
    el.innerText = original;
  });
});
