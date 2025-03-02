// theme
document.getElementById("theme-btn").addEventListener("click", function () {
  const rNum = Math.floor(Math.random() * 256);
  const gNum = Math.floor(Math.random() * 256);
  const bNum = Math.floor(Math.random() * 256);
  document.getElementById(
    "htmlTag"
  ).style.backgroundColor = `rgb(${rNum}, ${gNum}, ${bNum})`;
});
// date
const date = new Date();
const now = date.toDateString().replace(" ", ", ");
document.getElementById("live-date").innerText = `${now}`;
// discover
document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// shopEase-btn (first task)
document
  .getElementById("shopEase-btn")
  .addEventListener("click", function (event) {
    task(event, "shopEase-btn", "fixMobile");
  });
// cloudSync-btn (2nd task)
document
  .getElementById("cloudSync-btn")
  .addEventListener("click", function (event) {
    task(event, "cloudSync-btn", "darkMode");
  });
// SwiftPay-btn (3rd task)
document
  .getElementById("SwiftPay-btn")
  .addEventListener("click", function (event) {
    task(event, "SwiftPay-btn", "third-head");
  });
// fourth-btn (fourth task)
document
  .getElementById("fourth-btn")
  .addEventListener("click", function (event) {
    task(event, "fourth-btn", "fourth-head");
  });
// fifth-btn (fifth task)
document
  .getElementById("fifth-btn")
  .addEventListener("click", function (event) {
    task(event, "fifth-btn", "fifth-head");
  });
// sixth-btn (sixth task)
document
  .getElementById("sixth-btn")
  .addEventListener("click", function (event) {
    task(event, "sixth-btn", "sixth-head");
  });
// clear btn
document
  .getElementById("clear-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerHTML = "";
  });
