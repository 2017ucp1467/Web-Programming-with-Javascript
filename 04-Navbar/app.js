// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const togglebtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

togglebtn.addEventListener("click", function() {
  // if (links.classList.contains("show-links")) {
  //   console.log(links.classList);
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
