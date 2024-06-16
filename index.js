const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        document.getElementById('signUpMessage').innerText = 'Email already in use';
        return;
    }
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('signUpMessage').innerText = 'Account created successfully. Redirecting to login...';
    setTimeout(() => {
        document.querySelector('.container').classList.remove('right-panel-active');
    }, 100); 
});


document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        document.getElementById('signInMessage').innerText = 'Invalid email or password';
        return;
    }

    // Set the authenticated flag in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    document.getElementById('signInMessage').innerText = 'Logged in successfully';

    // Redirect to homepage.html
    window.location.href = 'homepage.html';
});

