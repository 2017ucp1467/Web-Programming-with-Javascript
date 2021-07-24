// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

const vidContainer = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function() {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vidContainer.pause();
  } else {
    btn.classList.remove("slide");
    vidContainer.play();
  }
});

// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
window.addEventListener("load", function() {
  preloader.classList.add("hide-preloader");
});
