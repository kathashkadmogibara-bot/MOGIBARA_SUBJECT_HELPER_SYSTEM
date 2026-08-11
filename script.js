const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fromBase = document.getElementById("fromBase");
const numberInput = document.getElementById("number");
const toBase = document.getElementById("toBase");

const convertButton = document.getElementById("convertButton");

const answer = document.getElementById("answer");
const history = document.getElementById("history");


// Convert button
convertButton.addEventListener("click", function () {

    const x = Number(fromBase.value);
    const yz = numberInput.value.trim().toUpperCase();
    const b = Number(toBase.value);


    // Base validation
    if (!Number.isInteger(x) || !Number.isInteger(b) ||
        x < 2 || x > 36 || b < 2 || b > 36) {

        showError("Error: Bases must be between 2 and 36.");
        return;
    }


    // Number empty check
    if (yz === "") {
        showError("Error: Please enter a number.");
        return;
    }


    // Check whether every digit belongs to the selected base
    for (let i = 0; i < yz.length; i++) {

        const digitValue = digits.indexOf(yz[i]);

        if (digitValue === -1 || digitValue >= x) {
            showError(
                "Error: " + yz[i] +
                " is not valid for base " + x + "."
            );
            return;
        }
    }


    // Convert input number to decimal
    let decimal;

    try {
        decimal = parseInt(yz, x);
    } catch (error) {
        showError("Error: Invalid number.");
        return;
    }


    // Check conversion result
    if (!Number.isSafeInteger(decimal)) {
        showError("Error: Number is too large.");
        return;
    }


    // Convert decimal to target base
    let result;

    if (decimal === 0) {

        result = "0";

    } else {

        result = "";

        while (decimal > 0) {

            result = digits[decimal % b] + result;

            decimal = Math.floor(decimal / b);
        }
    }


    // Remove old error
    clearError();


    // Show latest answer
    answer.textContent = result;


    // Add conversion to history
    const historyItem = document.createElement("p");

    historyItem.textContent =
        yz + " (Base " + x + ")" +
        " → " +
        result + " (Base " + b + ")";

    history.prepend(historyItem);

});


// Show error
function showError(message) {

    let errorMessage = document.getElementById("errorMessage");

    if (!errorMessage) {

        errorMessage = document.createElement("p");

        errorMessage.id = "errorMessage";

        errorMessage.style.color = "red";

        convertButton.parentNode.insertBefore(
            errorMessage,
            convertButton.nextSibling
        );
    }

    errorMessage.textContent = message;

    answer.textContent = "";
}


// Clear error
function clearError() {

    const errorMessage =
        document.getElementById("errorMessage");

    if (errorMessage) {
        errorMessage.textContent = "";
    }
}
