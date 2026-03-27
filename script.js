// イントロ
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.style.opacity = "0";
      setTimeout(() => intro.remove(), 800);
    });
  }
});

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

// Swiper
window.addEventListener("load", () => {
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: { delay: 3000 },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }
});
// ===== 初回表示グリッチ =====
window.addEventListener("load", () => {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  document.querySelectorAll(".glitch-text").forEach(el => {

    let iteration = 0;
    const original = el.innerText;

    const interval = setInterval(() => {
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

      iteration += 1 / 2; // ←スピード（大きいほど速い）
    }, 40);

  });

});
