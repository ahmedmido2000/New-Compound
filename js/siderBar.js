let sideBar = document.querySelector(".side-bar");
function showSideBar(icon) {
  if (icon.style.left == "340px") {
    icon.style.left = "0";
    sideBar.style.left = "-340px";
  } else {
    icon.style.left = "340px";
    sideBar.style.left = "0";
  }
}