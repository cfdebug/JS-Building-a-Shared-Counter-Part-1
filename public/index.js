async function main() {
  const countContainer = document.querySelector("#count-container");
  const incrementButton = document.querySelector("#increment-button");
  const decrementButton = document.querySelector("#decrement-button");

  let currCount = await fetch("http://localhost:9001/counter");
  let countObj = await currCount.json();
  console.log(countObj);
  let countValue = countObj.value;

  function increment() {
    countValue++;
    countContainer.textContent = countValue;
  }

  function decrement() {
    countValue--;
    countContainer.textContent = countValue;
  }

  incrementButton.addEventListener("click", increment);
  decrementButton.addEventListener("click", decrement);
  countContainer.textContent = countValue;
}
main();
