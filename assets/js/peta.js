const map = L.map("map").setView([-7.7956, 110.3695], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

/* MARKERS */

// Malioboro
L.marker([-7.7926, 110.3658]).addTo(map).bindPopup(`
    <b>Malioboro</b><br>
    Ikon wisata terkenal di Yogyakarta.
  `);

// Keraton
L.marker([-7.8053, 110.3642]).addTo(map).bindPopup(`
    <b>Keraton Yogyakarta</b><br>
    Pusat budaya dan sejarah Jogja.
  `);

// Prambanan
L.marker([-7.752, 110.4915]).addTo(map).bindPopup(`
    <b>Candi Prambanan</b><br>
    Candi Hindu terbesar di Indonesia.
  `);

// HAMBURGER MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// FADE UP
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
