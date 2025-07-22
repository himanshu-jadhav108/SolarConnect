function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const income = document.getElementById('income').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const number = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !income || !city || !state || !number || !email) {
        document.getElementById('formResponse').textContent = 'Please fill all fields.';
        return;
    }

    // For now, just simulate success response
    document.getElementById('formResponse').textContent = `Thank you ${name}, our team will contact you soon!`;
    
    // Optionally clear form
    document.getElementById('registrationForm').reset();
}
