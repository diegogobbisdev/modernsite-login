// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMobile.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Form Validation and Submission

// Registration Form
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// Validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validatePhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

function validateName(name) {
    return name.trim().length >= 2;
}

function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

function hideError(element) {
    element.textContent = '';
    element.style.display = 'none';
}

// Registration Form Validation
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Reset errors
    hideError(nameError);
    hideError(emailError);
    hideError(phoneError);
    hideError(passwordError);
    hideError(confirmPasswordError);
    
    let isValid = true;
    
    // Validate name
    if (!validateName(name.value)) {
        showError(nameError, 'Nome deve ter pelo menos 2 caracteres');
        isValid = false;
    }
    
    // Validate email
    if (!validateEmail(email.value)) {
        showError(emailError, 'Por favor, insira um e-mail válido');
        isValid = false;
    }
    
    // Validate phone
    if (!validatePhone(phone.value)) {
        showError(phoneError, 'Por favor, insira um telefone válido (ex: (11) 99999-9999)');
        isValid = false;
    }
    
    // Validate password
    if (!validatePassword(password.value)) {
        showError(passwordError, 'A senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }
    
    // Validate password confirmation
    if (password.value !== confirmPassword.value) {
        showError(confirmPasswordError, 'As senhas não coincidem');
        isValid = false;
    }
    
    if (isValid) {
        // Form is valid, show success message and log data
        console.log('=== DADOS DE CADASTRO ===');
        console.log('Nome:', name.value);
        console.log('E-mail:', email.value);
        console.log('Telefone:', phone.value);
        console.log('Senha:', password.value);
        console.log('=========================');
        
        // Show success message
        alert('Cadastro realizado com sucesso! Verifique o console para ver os dados.');
        
        // Reset form
        registerForm.reset();
    }
});

// Login Form Validation
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    
    // Get error elements
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');
    
    // Reset errors
    hideError(loginEmailError);
    hideError(loginPasswordError);
    
    let isValid = true;
    
    // Validate email
    if (!validateEmail(loginEmail.value)) {
        showError(loginEmailError, 'Por favor, insira um e-mail válido');
        isValid = false;
    }
    
    // Validate password
    if (!validatePassword(loginPassword.value)) {
        showError(loginPasswordError, 'A senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }
    
    if (isValid) {
        // Form is valid, show success message and log data
        console.log('=== DADOS DE LOGIN ===');
        console.log('E-mail:', loginEmail.value);
        console.log('Senha:', loginPassword.value);
        console.log('=====================');
        
        // Show success message
        alert('Login realizado com sucesso! Verifique o console para ver os dados.');
        
        // Reset form
        loginForm.reset();
    }
});

// Real-time validation for registration form
document.getElementById('name').addEventListener('input', function() {
    const nameError = document.getElementById('nameError');
    if (!validateName(this.value)) {
        showError(nameError, 'Nome deve ter pelo menos 2 caracteres');
    } else {
        hideError(nameError);
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailError = document.getElementById('emailError');
    if (!validateEmail(this.value)) {
        showError(emailError, 'Por favor, insira um e-mail válido');
    } else {
        hideError(emailError);
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phoneError = document.getElementById('phoneError');
    if (!validatePhone(this.value)) {
        showError(phoneError, 'Por favor, insira um telefone válido (ex: (11) 99999-9999)');
    } else {
        hideError(phoneError);
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordError = document.getElementById('passwordError');
    if (!validatePassword(this.value)) {
        showError(passwordError, 'A senha deve ter pelo menos 6 caracteres');
    } else {
        hideError(passwordError);
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const password = document.getElementById('password').value;
    
    if (this.value !== password) {
        showError(confirmPasswordError, 'As senhas não coincidem');
    } else {
        hideError(confirmPasswordError);
    }
});

// Real-time validation for login form
document.getElementById('loginEmail').addEventListener('input', function() {
    const loginEmailError = document.getElementById('loginEmailError');
    if (!validateEmail(this.value)) {
        showError(loginEmailError, 'Por favor, insira um e-mail válido');
    } else {
        hideError(loginEmailError);
    }
});

document.getElementById('loginPassword').addEventListener('input', function() {
    const loginPasswordError = document.getElementById('loginPasswordError');
    if (!validatePassword(this.value)) {
        showError(loginPasswordError, 'A senha deve ter pelo menos 6 caracteres');
    } else {
        hideError(loginPasswordError);
    }
});

// Phone input mask
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length <= 2) {
            value = value.replace(/^(\d{0,2})/, '($1');
        } else if (value.length <= 6) {
            value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
        } else if (value.length <= 10) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
        
        e.target.value = value;
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
});