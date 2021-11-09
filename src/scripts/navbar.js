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
