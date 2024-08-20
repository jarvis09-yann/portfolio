const video = document.getElementById("bg-video");
const firstPage = document.querySelector(".first-page");

firstPage.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    video.volume = 0.5;
  } else {
    video.muted = true;
  }
});

// document.addEventListener("scroll", function () { // TODO: Choose whether to use this or not
//   if (window.scrollY > 0) {
//     video.pause();
//   } else {
//     video.play();
//   }
// });
