const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipEl = document.querySelector("#tip");
const totalEl = document.querySelector("#total");
const resetBtn = document.querySelector("#reset-btn");
const customBtn = document.querySelector("#custom");

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

bill.addEventListener("input", calculateTotal);

customBtn.addEventListener("click", customTip);

people.addEventListener("input", countPeople);

resetBtn.addEventListener("click", () => {
    bill.value = "";
    people.value = "";
    tipEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
})

function calculateTotal() {
    if((!people.value) || people.value == "" || people.value == 0) {
        return;
    }
    let num = Number(people.value)

    totalEl.textContent = "$" + String((bill.value / num).toFixed(2));
}

function countPeople() {
    if((!people.value) || people.value == "" || people.value == 0) {
        return;
    }
    let num = Number(people.value)

    totalEl.textContent = "$" + String((bill.value / num).toFixed(2));
}

function calculateTip() {
    let tip = bill.value * this.dataset.percent;
    let num = Number(people.value)
    let total = Number(bill.value) + tip;
    

    tipEl.textContent = "$" + tip.toFixed(2);
    totalEl.textContent = "$" + (total / num).toFixed(2);
}

function customTip() {
    let custom = Number(prompt("What percentage would you like to tip?")) / 100;
    console.log(custom)

    let tip = bill.value * custom;
    let num = Number(people.value)
    let total = Number(bill.value) + tip;
    

    tipEl.textContent = "$" + tip.toFixed(2);
    totalEl.textContent = "$" + (total / num).toFixed(2);

}


