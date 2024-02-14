const login123 = document.getElementById('login-123');
const errorMessage = document.getElementById('error-message');

login123.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = login123.loginUsername.value;
  const password = login123.loginPassword.value;

  if (username === '12345' && password === '12345') {
    errorMessage.textContent = '';
    errorMessage.style.color = 'green';
    localStorage.setItem("logedin",true);
    window.location.assign("dashboard.html");
  } else {
    
    errorMessage.textContent = 'wrong password';
    
    errorMessage.style.color = 'red';
    return;
  }
  
});
