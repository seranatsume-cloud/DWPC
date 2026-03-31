// ===== グリッチローディング =====
window.addEventListener("load", () => {
  const el = document.querySelector(".loading-text");
  const loading = document.getElementById("loading");

  if (!el || !loading) return;

  const originalText = el.textContent;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@";

  let iteration = 0;

  el.classList.add("loading-glitch");

  const interval = setInterval(() => {
    el.textContent = originalText
      .split("")
      .map((char, index) => {
        if (index < iteration) return originalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    iteration += 0.3;

    if (iteration >= originalText.length) {
      clearInterval(interval);

      el.textContent = originalText;
      el.classList.remove("loading-glitch");

      setTimeout(() => {
        loading.classList.add("fade-out");

        setTimeout(() => {
          loading.style.display = "none";
        }, 1000);
      }, 500);
    }
  }, 30);
});

// ===== グリッチ（ホバー） =====
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

// ===== ナビ初回グリッチ =====
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

      if (p.y < 0) {
        p.y = canvas.height;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 150, 255, 0.15)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
