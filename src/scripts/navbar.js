export function navbar() {
  const btn = document.getElementById("Collapse");
  btn.addEventListener("click", () => {
    if (btn.className === "collapse") {
      btn.className += " responsive";
    } else {
      btn.className = "collapse";
    }
  });
}

export const changeColor = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let a = document.querySelector(".logo-text");
    let b = document.querySelector(".hamburger-btn");
    let c = document.querySelector(".nav-list");
    if (scroll >= 800) {
      setTimeout(() => {
        a.classList.add("muncul");
        b.classList.add("muncul");
        c.classList.add("muncul");
      }, 0);
    }
    if (scroll <= 800) {
      setTimeout(() => {
        a.classList.remove("muncul");
        b.classList.remove("muncul");
        c.classList.remove("muncul");
      }, 0);
    }
  });
};
