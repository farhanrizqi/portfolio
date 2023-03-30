// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// ham
const hamburger = document.querySelector("#ham");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("ham-active");
  navmenu.classList.toggle("hidden");
});
