// theme
document.getElementById("theme-btn").addEventListener("click", function () {
  const rNum = parseInt(Math.random() * 255);
  const gNum = parseInt(Math.random() * 255);
  const bNum = parseInt(Math.random() * 255);
  document.getElementById(
    "htmlTag"
  ).style.backgroundColor = `rgb(${rNum}, ${gNum}, ${bNum})`;
});
const date = new Date();
const now = date.toLocaleDateString();
alert(now);
