const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");

video.onended = () => {
  intro.style.display = "none";
};
