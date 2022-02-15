// Variables
const setBudget = document.getElementById("setBudget");
const budgetSave = document.getElementById("budgetSave");
const budgetOut = document.getElementById("budgetOut");
const expensesOut = document.getElementById("expensesOut");
const remainderOut = document.getElementById("remainderOut");
const setExpDescription = document.getElementById("setExpDescription");
const setExpAmount = document.getElementById("setExpAmount");
const displayOut = document.getElementById("displayOut");
let expOut = "";   
// end Variables

budgetSave.onclick = function() {
    const Budget = setBudget.value;
    budgetOut.innerHTML = Budget;
}

expenseSave.onclick = function() {
    const description = setExpDescription.value;
    const amount = setExpAmount.value;
    let out = '<div>';
    out += description + '</div>' + '<div>' + amount + '</div>'
    displayOut.innerHTML = displayOut.innerHTML += out;
}