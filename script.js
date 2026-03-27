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
  el.addEventListener("mouseover", () => {
    let iteration = 0;
    const original = el.innerText;

    const interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((letter, index) => {
          if (index < iteration) return original[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      iteration += 1 / 8;   // ←ここ調整
      if (iteration >= original.length) {
        clearInterval(interval);
        el.innerText = original;
      }
    }, 50); // ←ここ調整
  });
});
