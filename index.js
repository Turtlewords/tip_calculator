const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipEl = document.querySelector("#tip");
const total = document.querySelector("#total");
const resetBtn = document.querySelector("#reset-btn");

const buttons = document.querySelectorAll("button"); 

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
    })
})

for (let i = 0; i < buttons.length - 2; i++) {
    buttons[i].addEventListener("click", calculateTip);
}

people.addEventListener("change", countPeople);

resetBtn.addEventListener("click", () => {
    bill.value = "";
    people.value = "";
    tipEl.textContent = "$0.00";
    total.textContent = "$0.00";
})

function countPeople() {
    let num = Number(people.value)

    total.textContent = "$" + String((bill.value / num).toFixed(2));
}

function calculateTip() {
    let tip = bill.value * this.dataset.percent;
    let num = Number(people.value)
    console.log("Tip: " + tip);
    let total = Number(bill.value) + tip;
    console.log("Total: " + total)

    tipEl.textContent = "$" + tip;
    total.textContent = "$" + (total / num).toFixed(2);
}


