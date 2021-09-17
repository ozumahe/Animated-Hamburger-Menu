const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links2");
// getting the total height of the link
const linksHeight = links.getBoundingClientRect().height;
const nav = document.getElementById("nav2");
const navHeight = nav.getBoundingClientRect().height;

// menuBtn event listner
menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("open")) {
    menuBtn.classList.add("open");
    nav.style.height = `${linksHeight + 10}px`;
  } else {
    menuBtn.classList.remove("open");
    nav.style.height = 0;
  }
});

console.log(linksHeight);
