var spaces=prompt("Thank you Visited to Debit-Card \nyour name?")
alert ("Most Welcome " + spaces + " ! ")

const accountNumberInput = document.getElementById("number");
const cardholderNameInput = document.getElementById("text");
const expiryDateInput = document.getElementById("date");

const displayNumber = document.querySelector(".num");
const displayCardholder = document.querySelector(".p4");
const displayExpiry = document.querySelector(".p3");

const submitButton = document.getElementById("button");

submitButton.addEventListener("click", function (e) {
    e.preventDefault(); 

    const accountNumber = accountNumberInput.value;
    const cardholderName = cardholderNameInput.value;
    const expiryDate = expiryDateInput.value;

    if (accountNumber) {
        const formattedNumber = accountNumber.replace(/(.{4})/g, "$1 ");
        displayNumber.innerHTML = formattedNumber.trim();
    }

    if (cardholderName) {
        displayCardholder.textContent = cardholderName.toUpperCase();
    }

    if (expiryDate) {
        const [year, month] = expiryDate.split("-");
        displayExpiry.textContent = `Card expire ${month}/${year.slice(2)}`;
    }
const messageDisplay=document.getElementById("message")
    messageDisplay.textContent = "Your card is updated";
});
