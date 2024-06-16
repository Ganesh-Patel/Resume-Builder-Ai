const isAuthenticated = localStorage.getItem('isAuthenticated');

if (isAuthenticated !== 'true') {
    window.location.href = 'index.html';
}

const themeToggleBtn = document.getElementById('themeToggleBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Theme toggle logic
const checkbox = document.getElementById("checkbox");
const body = document.body;
const currTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currTheme);
checkbox.checked = currTheme === 'dark';

checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    body.setAttribute('data-theme', newTheme);
});


logoutBtn.addEventListener('click', function() {
    window.location.href = 'index.html'; 
});
const templatebtn = document.getElementById("templatebtn");

templatebtn.addEventListener('click', function() {
    window.location.href = 'template.html'; 
});