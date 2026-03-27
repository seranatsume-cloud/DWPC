window.addEventListener("load", () => {
  new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
      delay: 2500,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
