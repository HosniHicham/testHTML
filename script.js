function openAuthModal(type) {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('active');
  toggleModalForm(type);
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.remove('active');
}

function toggleModalForm(type) {
  const loginForm = document.getElementById('modal-login-form');
  const registerForm = document.getElementById('modal-register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (type === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
  }
}
