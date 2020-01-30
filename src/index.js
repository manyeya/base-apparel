import './styles/main.scss'

const email = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const errorIcon= document.querySelector('#errorIcon');
email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        errorIcon.style.display = 'none';
    }
})