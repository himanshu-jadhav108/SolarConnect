function calculateSavings() {
    const bill = parseFloat(document.getElementById('billInput').value);
    if (isNaN(bill) || bill <= 0) {
        document.getElementById('result').innerText = "Enter a Valid Bill Amount.";
        return;
    }
    const yearlyBill = bill * 12;
    const estimatedSavings = yearlyBill * 0.6;
    document.getElementById('result').innerText =
        `You Could Save Approx Rs. ${estimatedSavings.toFixed(2)} Per Year By Switching To Solar!`;
}