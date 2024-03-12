//console.log('Hello World!');

// toggle menu expanded/collapsed

const toggleMenu = () => {
  const menu = document.querySelector(".site-header");
  menu.classList.toggle("expanded");
};

document.querySelector("#menuToggle").addEventListener("click", toggleMenu);
