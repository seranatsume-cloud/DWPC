// ===== グリッチ用 =====
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// ===== ナビグリッチ =====
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

// ===== 初回グリッチ =====
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
      iteration += 0.5;
    }, 40);
  });
});

// ===== Swiper =====
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
      }
    });
  }
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
      if (p.y < 0) p.y = canvas.height;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180,150,255,0.15)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ===== ローディング =====
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const text = document.querySelector(".loading-text");

  if (!loading || !text) return;

  const original = "LOADING";
  let iteration = 0;

  const interval = setInterval(() => {
    text.innerText = original
      .split("")
      .map((char, i) => {
        if (i < iteration) return original[i];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    iteration += Math.random() * 0.5;

    if (iteration >= original.length) {
      clearInterval(interval);

      setTimeout(() => {
        loading.classList.add("fade-out");

        setTimeout(() => {
          loading.style.display = "none";
        }, 1000);
      }, 800);
    }
  }, 40);
});
// 文字スクランブル表示
function scrambleText(element, delay = 0) {
  const text = element.innerText;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let iterations = 0;

  element.innerText = "";

  setTimeout(() => {
    const interval = setInterval(() => {
      element.innerText = text
        .split("")
        .map((char, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= text.length) clearInterval(interval);

      iterations += 1 / 2;
    }, 30);
  }, delay);
}

// ページ読み込み時に発火
window.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".scramble");

  targets.forEach((el, index) => {
    scrambleText(el, index * 200); // ←順番に出る
  });
});
