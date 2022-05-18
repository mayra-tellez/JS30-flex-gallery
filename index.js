const panels = document.querySelectorAll(".panel");

const toggleOpen = (panel) => {
  panel = panel.srcElement.classList;
  panel.toggle("open");
}

const toggleActive = (e) => {
  if (e.propertyName.includes("flex")) {
    e.srcElement.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));