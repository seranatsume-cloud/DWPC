// グリッチ
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll(".glitch-text").forEach(el => {
  let interval = null;
  const original = el.innerText;

  el.addEventListener("mouseenter", () => {
    let iteration = 0;

    interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((letter, i) => {
          if (i < iteration) return original[i];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= original.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  });

  el.addEventListener("mouseleave", () => {
    clearInterval(interval);
    el.innerText = original;
  });
});
