// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linkContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
  // linkContainer.classList.toggle("show-links");
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function() {
  const navBarHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navBarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 600) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    // navigating to specific parts by getting id of link where the current link points to
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculating height to be scrolled
    const navBarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let pos = element.offsetTop - navBarHeight;
    if (!fixedNav) {
      pos = pos - navBarHeight;
    }
    if (navBarHeight > 82) {
      pos = pos + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: pos,
    });
    linkContainer.style.height = 0;
  });
});
