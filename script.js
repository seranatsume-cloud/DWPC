const intro = document.getElementById("intro");

// クリックで消す
if (intro) {
  intro.addEventListener("click", () => {
    intro.style.display = "none";
  });
}

// 動画（あるときだけ）
const video = document.getElementById("introVideo");

if (video) {
  video.onended = () => {
    intro.style.display = "none";
  };
}
