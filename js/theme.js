document.getElementById("themeToggleButton").addEventListener("click", changeTheme);

function changeTheme() {
  var element = document.body;
  var icon = document.getElementById("themeIcon");

  if (element.dataset.bsTheme === "light") {
    element.dataset.bsTheme = "dark";
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-brightness-high");
  } else {
    element.dataset.bsTheme = "light";
    icon.classList.remove("bi-brightness-high");
    icon.classList.add("bi-moon-stars-fill");
  }
  changeTheme();
}
