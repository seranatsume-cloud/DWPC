// ===== イントロ =====
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.style.opacity = "0";
      setTimeout(() => intro.remove(), 800);
    });
  }

  // ===== ページロード時グリッチ =====
  document.querySelectorAll(".glitch-text").forEach(el => {
    glitchOnce(el);
  });
});

// ===== グリッチ関数 =====
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function glitchOnce(el) {
  let iteration = 0;
  const original = el.innerText;

  const interval = setInterval(() => {
    el.innerText = original
      .split("")
      .map((letter, i) => {
        if (i < iteration) return original[i];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= original.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

// ===== ホバーグリッチ =====
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

// ===== 上に戻るボタン =====
const btn = document.querySelector(".back-to-top");

if (btn) {
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ===== Swiper =====
window.addEventListener("load", () => {
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: { delay: 3000 },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
});
