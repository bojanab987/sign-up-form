const form = document.querySelector('.js-form');
const inputs = document.querySelectorAll('.js-input');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        if (input.value === "") {
            input.parentNode.classList.add('error__empty')
            input.classList.add('invalid');
        } else if (input.type == 'email' && validateEmail(input.value) === false) {
            input.parentNode.classList.remove('error__empty');
            input.parentNode.classList.add('error__email');
            input.classList.add('invalid');
        } else if (input.type == 'password' && input.value.length <= 6) {
            input.parentNode.classList.remove('error__empty');
            input.parentNode.classList.add('error__password');
            input.classList.add('invalid');
        } else {
            input.parentNode.classList.remove('error__empty');
            input.parentNode.classList.remove('error__email');
            input.parentNode.classList.remove('error__password');
            input.classList.remove('invalid');
        }
    });
});

//validate email format
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}