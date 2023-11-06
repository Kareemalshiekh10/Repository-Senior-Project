document.getElementById('login-form').addEventListener('submit', function (event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        event.preventDefault();
        alert('Username and password are required.');
    }
});
document.getElementById('password').addEventListener('input', function () {
        var password = this.value;
        var result = zxcvbn(password);
        var meter = document.getElementById('password-strength-meter');
        var text = document.getElementById('password-strength-text');

        meter.value = result.score; // Update a password strength meter (e.g., a progress bar)
        text.innerHTML = 'Strength: ' + result.feedback.suggestions.join(' ');
    });