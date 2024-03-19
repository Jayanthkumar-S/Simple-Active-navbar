const menu = document.querySelectorAll("a");

menu.forEach((links) => {
  links.addEventListener("click", function () {
    menu.forEach((items) => items.classList.remove("active"));
    this.classList.add("active");
  });
});
