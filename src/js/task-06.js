const input = document.getElementById('validation-input');

input.addEventListener('blur',inputBlur);

function inputBlur(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)){
        input.classList.remove('invalid');
        input.classList.add('valid');
    }

    else if (event.currentTarget.value.length !== Number(input.dataset.length)){
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}





