// BUG 1: The ID doesn't match the HTML element! Fix "counter-display-num"
const display = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");


incrementBtn.addEventListener("click", () => {
  count++;
  // BUG 2: Updates .value instead of text content... why?
  display.innerText = count;
});


// JS TASK 1: Add event listener for decrementBtn to decrease count (don't go below 0!)

decrementBtn.addEventListener('click', () => {

  if(count = 0){
    display.innerText = 0
  } else {
    count--;
    display.innerText = count;
  }
})
// JS TASK 2: Add event listener for resetBtn to set count back to 0
