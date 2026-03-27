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

  // カーソル乗ったらバグ開始
  el.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
      el.innerText = original
        .split("")
.map((letter) => {
  return Math.random() > 0.6
    ? letter
    : letters[Math.floor(Math.random() * letters.length)];
})
        .join("");
    }, 80); // ←速さ調整
  });

  // カーソル外したら元に戻す
  el.addEventListener("mouseleave", () => {
    clearInterval(interval);
    el.innerText = original;
  });
});
const swiper = new Swiper(".mySwiper", {
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
