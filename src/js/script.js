const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-icon");
const links = document.querySelectorAll(".links");

hamburger.addEventListener("click", function () {
  sidebar.style.width = "300px";
  body.style.overflowY = "hidden";
});

sidebar.addEventListener("click", function (link) {
  const id = link.target.dataset.id;

  if (id) {
    sidebar.style.width = "0px";
    body.style.overflowY = "visible";
  } else {
    sidebar.style.width = "300px";
    body.style.overflowY = "hidden";
  }
});
