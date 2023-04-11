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
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("ham-active");
  navmenu.classList.toggle("hidden");
});

// klik diluar sidebar untuk close nav hamenu
const ham = document.querySelector("#ham");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navmenu.contains(e.target)) {
    hamburger.classList.remove("ham-active");
    navmenu.classList.toggle("hidden");
  }
});

// intersection detector
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
