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
// ===== パーティクル =====
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");

  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // 粒生成
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.3 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y -= p.speed;

      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      // ✨ 深海っぽい淡い光
      ctx.fillStyle = "rgba(180, 150, 255, 0.15)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
