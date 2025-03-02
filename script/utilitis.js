// function for get elemnet byid
function getInnerTextById(id) {
  const inner = document.getElementById(id).innerText;
  return inner;
}
// function for complete task
function task(event, btnid, heading) {
  event.preventDefault();
  const task = parseInt(getInnerTextById("taskAssigned"));
  const newtask = task - 1;
  const allTask = parseInt(getInnerTextById("all-task"));
  const newAllTask = allTask + 1;
  alert("Board Updated Successfully");
  document.getElementById("taskAssigned").innerText = newtask;
  document.getElementById("all-task").innerText = newAllTask;
  document.getElementById(btnid).disabled = true; // "shopEase-btn"
  document.getElementById(btnid).style.backgroundColor = "#9ca3af";
  const timeFormate = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", timeFormate).format(new Date());
  const h1 = document.getElementById(heading).innerText;
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
  if (newtask === 0) {
    alert("Congrats!!! You have completed all the current task");
  }
}
