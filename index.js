document.getElementById("calculate").addEventListener("click", function () {
    // Get input values and operator
    const first = parseFloat(document.getElementById("first-number").value);
    const second = parseFloat(document.getElementById("second-number").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");

    // Input validation
    if (isNaN(first) || isNaN(second)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let result;

    // Perform calculation based on operator
    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            if (second === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = first / second;
            break;
        case "%":
            result = first % second;
            break;
        default:
            resultElement.textContent = "Unknown operator.";
            return;
    }

    // Display the result
    resultElement.textContent = `Result: ${result}`;
});
