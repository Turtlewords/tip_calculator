const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipEl = document.querySelector("#tip");
const totalEl = document.querySelector("#total");
const resetBtn = document.querySelector("#reset-btn");
const customBtn = document.querySelector("#custom");
const peopleError = document.querySelector("#people-error");

const buttons = document.querySelectorAll(".tip-btn"); 



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        highlightTipButton(e);
    })
})



for (let i = 0; i < buttons.length - 1; i++) {
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

    // removes active state for each tip button when reset button is clicked
    buttons.forEach((button) => {
        button.classList.remove("tip-active");
    })
})

function calculateTotal() {
    if((!people.value) || people.value == "" || people.value === 0) {
        return;
    }
    let num = Number(people.value)

    totalEl.textContent = "$" + String((bill.value / num).toFixed(2));
    
}

function countPeople() {
    if (people.value == 0) {
        peopleError.style.display = "inline";
        people.style.outlineStyle = "solid"
        people.style.outlineColor = "red";
        return;
    }

    if((!people.value) || people.value == "" ) {
        return;
    }
    peopleError.style.display = "none"
    people.style.outline = "none";
    let num = Number(people.value)

    totalEl.textContent = "$" + String((bill.value / num).toFixed(2));
    
}

function calculateTip() {
    if (!bill.value || !people.value) {
        return;
    }
    
    let tip = bill.value * this.dataset.percent;
    let num = Number(people.value)
    let total = Number(bill.value) + tip;
    
    

    customBtn.textContent = "Custom";

    tipEl.textContent = "$" + tip.toFixed(2);
    totalEl.textContent = "$" + (total / num).toFixed(2);
    
}

function highlightTipButton(e) {
    buttons.forEach((button) => {
        button.classList.remove("tip-active")
    })
    e.target.classList.add("tip-active");
}

function customTip() {
    if (!bill.value || !people.value) {
        alert("Please enter the bill and the number of people.")
        return;
    }

    let custom = Number(prompt("What percentage would you like to tip?")) / 100;
    console.log(custom)

    let tip = bill.value * custom;
    let num = Number(people.value)
    let total = Number(bill.value) + tip;
    

    tipEl.textContent = "$" + tip.toFixed(2);
    totalEl.textContent = "$" + (total / num).toFixed(2);
    customBtn.textContent = custom * 100 + "%";
    
}


