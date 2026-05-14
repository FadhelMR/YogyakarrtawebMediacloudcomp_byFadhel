// Fade Up Animation
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

fadeElements.forEach((el) => {
  observer.observe(el);
});

// wayang animation
const leftWayang = document.querySelector(".wayang-left");
const rightWayang = document.querySelector(".wayang-right");

let time = 0;

function animateWayang() {
  time += 0.01;

  // WAYANG KIRI
  const leftX = Math.sin(time) * 15;
  const leftY = Math.cos(time * 1.2) * 10;
  const leftRotate = Math.sin(time) * 2;

  leftWayang.style.transform = `
      translate(${leftX}px, ${leftY}px)
      rotate(${leftRotate}deg)
      `;

  // WAYANG KANAN
  const rightX = Math.sin(time + 2) * -15;
  const rightY = Math.cos(time * 1.2 + 2) * 10;
  const rightRotate = Math.sin(time + 2) * -2;

  rightWayang.style.transform = `
      translate(${rightX}px, ${rightY}px)
      rotate(${rightRotate}deg)
      `;

  requestAnimationFrame(animateWayang);
}

animateWayang();

// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
