// elements
let countElem = document.querySelector(".count");

let decrementBtn = document.querySelector(".decrement-button");
let incrementBtn = document.querySelector(".increment-button");
let resetBtn = document.querySelector(".reset-button");
let saveBtn = document.querySelector(".save-button");

let count = 0;

// events
incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
resetBtn.addEventListener("click", resetCount);

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
