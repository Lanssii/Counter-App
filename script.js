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

function incrementCount() {
  count++;
  countElem.textContent = count;
}

function decrementCount() {
  if (count > 0) {
    count--;
  }
  countElem.textContent = count;
}

function resetCount() {
  count = 0;
  countElem.textContent = count;
}
