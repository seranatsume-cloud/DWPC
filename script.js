window.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.remove(); // 完全削除
      }, 800);
    });
  }

});
