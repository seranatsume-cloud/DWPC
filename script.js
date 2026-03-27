// イントロ
const intro = document.getElementById("intro");

if (intro) {
  intro.addEventListener("click", () => {
    intro.style.transition = "1s";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  });
}

// グリッチ
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll(".glitch-text").forEach(el => {
  let interval = null;
  const original = el.innerText;

  el.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
      el.innerText = original
        .split("")
        .map(letter =>
          Math.random() > 0.6
            ? letter
            : letters[Math.floor(Math.random() * letters.length)]
        )
        .join("");
    }, 80);
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

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      grabCursor: true,
    });
  }
});
