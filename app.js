// set variable that is set, not to be changed
const coin = document.querySelector(".coin");
const countUp = document.querySelector(".counter");
const multiplierDisplayLuigi = document.querySelector(".multi-luigi");
const multiplierDisplayToad = document.querySelector(".multi-toad");
const luigiBtn = document.querySelector(".luigi");
const toadBtn = document.querySelector(".toad");
const resetBtn = document.querySelector(".reset");
// variables that can be changed
let counter = 0;
let luigiCount = 0;
let toadCount = 0;
let luigiUpgradeCost = 10;
let toadUpgradeCost = 20;

let luigiDisplayCost = document.querySelector(".luigiDisplayCost");
let toadDisplayCost = document.querySelector(".toadDisplayCost");

coin.addEventListener("click", function () {
  counter = counter + 1 + luigiCount;
  countUp.textContent = counter;
});
// click hire luigi to show how many luigis we haven
luigiBtn.addEventListener("click", function () {
  if (counter >= luigiUpgradeCost) {
    luigiCount++;
    multiplierDisplayLuigi.textContent = luigiCount;
    counter = counter - luigiUpgradeCost;
    //update the counter on display
    countUp.textContent = counter;
    luigiUpgradeCost = Math.floor(luigiUpgradeCost * 1.5);
    luigiDisplayCost.textContent = luigiUpgradeCost;
  }
});

toadBtn.addEventListener("click", function () {
  if (counter >= toadUpgradeCost) {
    toadCount++;
    multiplierDisplayToad.textContent = toadCount;
    counter = counter - toadUpgradeCost;
    countUp.textContent = counter;
    toadUpgradeCost = Math.floor(toadUpgradeCost * 1.5);
    toadDisplayCost.textContent = toadUpgradeCost;
  }
});

setInterval(function () {
  counter = counter + toadCount;
  countUp.textContent = counter;
}, 1000);

function loadFromLocalStorage() {
  const localCounter = localStorage.getItem("counter");
  if (localCounter !== null) {
    counter = parseInt(localCounter);
    countUp.textContent = counter;
    updateMultiplier(multiplierDisplayLuigi);
    updateMultiplier(multiplierDisplayToad);
  }
}
