export function navbar() {
  const btn = document.getElementById("navbar");
  const link = document.getElementById("myLinks");
  const el = document.querySelectorAll(".link");
  btn.addEventListener("click", () => {
    if (link.style.display === "block") {
      link.style.display = "none";
    } else {
      for (let index = 0; index < el.length; index++) {
        el[index].classList.add("click");
      }
      link.classList.add("click");
      link.style.display = "block";
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
