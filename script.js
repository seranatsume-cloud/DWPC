const intro = document.getElementById("intro");

// クリックで消える
if (intro) {
  intro.addEventListener("click", () => {
    intro.style.transition = "1s";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  });
}

// グリッチ文字
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll(".glitch-text").forEach(el => {
  let interval = null;
  const original = el.innerText;

  // マウス乗せたとき
  el.addEventListener("mouseover", () => {
    interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map(() => {
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
    }, 50); // ←速さ調整（小さいほど激しい）
  });

  // マウス離したとき
  el.addEventListener("mouseout", () => {
    clearInterval(interval);
    el.innerText = original;
  });
});
