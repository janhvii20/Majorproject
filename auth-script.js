document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Login attempt:', { username, password });
            alert('Login successful! Redirecting to dashboard...');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            console.log('Signup attempt:', { username, email, phone, password });
            alert('Signup successful! Redirecting to dashboard...');
        });
    }
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

function handleGoogleSignIn(response) {
    console.log('Google Sign-In successful:', response);
    alert('Google Sign-In successful! Redirecting to dashboard...');
}

function handleGoogleSignUp(response) {
    console.log('Google Sign-Up successful:', response);
    alert('Google Sign-Up successful! Redirecting to dashboard...');
}
