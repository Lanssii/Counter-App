// elements
let countElem = document.querySelector(".count");

let decrementBtn = document.querySelector(".decrement-button");
let incrementBtn = document.querySelector(".increment-button");
let resetBtn = document.querySelector(".reset-button");
let saveBtn = document.querySelector(".save-button");

let count = localStorage.getItem("count");

if (count === null) {
  count = 0;
} else {
  count = Number(count);
}

updateCount();

// events
incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
resetBtn.addEventListener("click", resetCount);
saveBtn.addEventListener("click", saveCount);

function updateCount() {
  countElem.textContent = count;
}

function incrementCount() {
  count++;
  updateCount();
}

function decrementCount() {
  if (count > 0) {
    count--;
  }
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}

function saveCount() {
  localStorage.setItem("count", count);
  updateCount();
}
