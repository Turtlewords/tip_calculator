const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const resetBtn = document.querySelector("#reset-btn");

const buttons = document.querySelectorAll("button"); 

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
    })
})

resetBtn.addEventListener("click", () => {
    bill.value = "";
    people.value = "";
    tip.textContent = "$0.00";
    total.textContent = "$0.00";
})

