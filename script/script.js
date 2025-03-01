// theme
document.getElementById("theme-btn").addEventListener("click", function () {
  const rNum = parseInt(Math.random() * 255);
  const gNum = parseInt(Math.random() * 255);
  const bNum = parseInt(Math.random() * 255);
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
document.getElementById("shopEase-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("shopEase-btn").disabled = true;
  document.getElementById("shopEase-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("fixMobile").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// cloudSync-btn (2nd task)
document.getElementById("cloudSync-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("cloudSync-btn").disabled = true;
  document.getElementById("cloudSync-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("darkMode").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// SwiftPay-btn (3rd task)
document.getElementById("SwiftPay-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("SwiftPay-btn").disabled = true;
  document.getElementById("SwiftPay-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("third-head").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// fourth-btn (fourth task)
document.getElementById("fourth-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("fourth-btn").disabled = true;
  document.getElementById("fourth-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("fourth-head").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// fifth-btn (fifth task)
document.getElementById("fifth-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("fifth-btn").disabled = true;
  document.getElementById("fifth-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("fifth-head").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// sixth-btn (sixth task)
document.getElementById("sixth-btn").addEventListener("click", function () {
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById("sixth-btn").disabled = true;
  document.getElementById("sixth-btn").style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById("sixth-head").innerText;
  const p = document.createElement("p");
  p.innerText = `You have complete the task ${h1} at ${time}`;
  document.getElementById("history").appendChild(p);
  p.classList.add(
    "bg-gray-100",
    "mt-4",
    "text-xs",
    "px-2",
    "mx-3",
    "rounded-lg",
    "py-2",
    "text-[#000000]"
  );
});
// clear btn
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history").innerHTML = "";
});
