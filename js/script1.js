const startBtn = document.getElementById('startBtn');
const heroSection = document.getElementById('heroSection');
const loginModal = document.getElementById('loginModal');
const loginCloseBtn = document.getElementById('loginCloseBtn');
const loginFormSection = document.getElementById('loginFormSection');
const signupFormSection = document.getElementById('signupFormSection');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');
const logoutBtn = document.getElementById('logoutBtn');
const logoutNav = document.getElementById('logoutNav');
const navbarLinks = document.querySelectorAll('nav ul li a:not([id="logoutBtn"])');

// Simple localStorage user system
function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}
function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
function clearUser() {
  localStorage.removeItem('user');
}

// Modal controls
function openLoginModal() {
  loginModal.classList.add('open');
  loginFormSection.style.display = 'block';
  signupFormSection.style.display = 'none';
  loginError.textContent = '';
  signupError.textContent = '';
  document.body.style.overflow = 'hidden';
}
function closeLoginModal() {
  loginModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Show the Endless title and description if logged in
function showHeroLoggedIn() {
  heroSection.innerHTML = `
    <h1 class="hero-title">Endless.</h1>
    <div class="hero-desc">
      Welcome to my portfolio! Here you can explore my projects, activities, and personal growth.<br>
      Navigate through the sections to know more about my journey and achievements. 
    </div>
  `;
}

// Show start button if not logged in
function showHeroStart() {
  heroSection.innerHTML = `<button id="startBtn">START</button>`;
  // re-add event listener
  const sb = document.getElementById('startBtn');
  if (sb) {
    sb.addEventListener('click', () => {
      if (getUser()) {
        alert("You're already signed in!");
      } else {
        openLoginModal();
      }
    });
  }
}

// Check login state on load
function updateNavForLogin() {
  if (getUser()) {
    if (logoutNav) logoutNav.style.display = '';
    showHeroLoggedIn();
  } else {
    if (logoutNav) logoutNav.style.display = 'none';
    showHeroStart();
  }
}
if (logoutBtn) {
  logoutBtn.addEventListener('click', function(e){
    e.preventDefault();
    clearUser();
    updateNavForLogin();
    alert('You have logged out.');
  });
}

// Navbar logic: open login modal if not signed in
navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (!getUser()) {
      e.preventDefault();
      openLoginModal();
    }
    // else (logged in): let navigation continue
  });
});

// START button logic (first run)
if (startBtn) {
  startBtn.addEventListener('click', () => {
    if (getUser()) {
      alert("You're already signed in!");
    } else {
      openLoginModal();
    }
  });
}

// Modal logic
if (loginCloseBtn) {
  loginCloseBtn.addEventListener('click', closeLoginModal);
}
loginModal && loginModal.addEventListener('click', function(e){
  if (e.target === loginModal) closeLoginModal();
});

// Switch to signup
if (showSignup) showSignup.addEventListener('click', function(e){
  e.preventDefault();
  loginFormSection.style.display = 'none';
  signupFormSection.style.display = 'block';
  loginError.textContent = '';
  signupError.textContent = '';
});
// Switch to login
if (showLogin) showLogin.addEventListener('click', function(e){
  e.preventDefault();
  loginFormSection.style.display = 'block';
  signupFormSection.style.display = 'none';
  loginError.textContent = '';
  signupError.textContent = '';
});

// Sign up handler
if (signupForm) signupForm.addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const password = document.getElementById('signupPassword').value;
  if (username.length < 3 || password.length < 3) {
    signupError.textContent = "Username & password must be at least 3 characters.";
    return;
  }
  if (localStorage.getItem('user_' + username)) {
    signupError.textContent = "Username already exists.";
    return;
  }
  localStorage.setItem('user_' + username, JSON.stringify({username, password}));
  setUser({username});
  closeLoginModal();
  updateNavForLogin();
  alert("Account created and signed in!");
});

// Sign in handler
if (loginForm) loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const stored = localStorage.getItem('user_' + username);
  if (!stored) {
    loginError.textContent = "No account found. Please sign up.";
    return;
  }
  const user = JSON.parse(stored);
  if (user.password !== password) {
    loginError.textContent = "Incorrect password.";
    return;
  }
  setUser({username});
  closeLoginModal();
  updateNavForLogin();
  alert("Signed in!");
});

// On page load, update nav and hero
updateNavForLogin();

// Also close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (loginModal.classList.contains('open') && (e.key === "Escape" || e.key === "Esc")) closeLoginModal();
});