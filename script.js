const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");

video.onended = () => {
  intro.style.display = "none";
};
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

      iteration += 1 / 3;

      if (iteration >= original.length) {
        clearInterval(interval);
        el.innerText = original;
      }
    }, 30);
  });
});
intro.addEventListener("click", () => {
  intro.style.display = "none";
});
