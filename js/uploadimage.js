let changeImgs = document.getElementById("img");
const inptChange = document.getElementById("upload");
inptChange.addEventListener("change", () => {
  changeImgs.src = URL.createObjectURL(inptChange.files[0]);
});
let showText = document.getElementById("togglepassword");
document
  .getElementById("togglepassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      showText.textContent = "Hide";
    } else {
      passwordField.type = "password";
      showText.textContent = "Show";
    }
  });
  document
  .getElementById("togglepassword-2")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password-2");
    if (passwordField.type === "password") {
    } else {
      passwordField.type = "password";
    }
  });

