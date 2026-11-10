// التبديل بين شاشات التطبيق الكاملة
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// التبديل بين تبويبات تسجيل الدخول وإنشاء حساب
function switchTab(tabName) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (tabName === 'login') {
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

// عند تسجيل الدخول ينقلنا مباشرة للواجهة الرئيسية
function handleLogin(e) {
  e.preventDefault();
  showScreen('dashboard-screen');
}

function handleRegister(e) {
  e.preventDefault();
  showScreen('dashboard-screen');
}
