// ===== イントロ =====
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.remove();
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

// ===== ページロード時にナビ文字を一瞬グリッチさせる =====
window.addEventListener("load", () => {
  document.querySelectorAll(".glitch-text").forEach(el => {
    const original = el.innerText;
    let iteration = 0;

    const interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((letter, i) => {
          if (i < iteration) return original[i];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= original.length) clearInterval(interval);

      iteration += 1 / 2;
    }, 40);
  });
});

// ===== Swiper（ポートフォリオ） =====
window.addEventListener("load", () => {
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
});

// ===== 上に戻るボタン =====
document.querySelectorAll(".back-top").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
