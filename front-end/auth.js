document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const errorMessage = document.getElementById('errorMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      localStorage.setItem('username', username);
      
      try {
        const response = await fetch('http://localhost:3001/auth/login', { // Ensure correct URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.access_token);
          window.location.href = 'index.html';
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const username = registerForm.username.value;
      const password = registerForm.password.value;
      
      try {
        const response = await fetch('http://localhost:3001/auth/register', { // Ensure correct URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        
        if (response.ok) {
          window.location.href = 'login.html';
        } else {
          throw new Error('Registration failed');
        }
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    });
  }
});
