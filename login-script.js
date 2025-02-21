document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Login attempt:', { username, password });
        alert('Login successful! Redirecting to dashboard...');
    });
});

function handleGoogleSignIn(response) {
    console.log('Google Sign-In successful:', response);
    alert('Google Sign-In successful! Redirecting to dashboard...');
}
