// MENU TOGGLE (mobile)
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// SCROLL TO SECTION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// ACTIVE NAV LINK
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});