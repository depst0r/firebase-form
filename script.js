'use strict'

const form = document.querySelector('form'),
    btnSubmit = document.querySelector('.btn'),
    email = document.getElementById('exampleInputEmail1'),
    pass = document.getElementById('exampleInputPassword1'),
    checkbox = document.getElementById('exampleCheck1');

function postDB(formData) {
    fetch('https://js-form-7807a-default-rtdb.firebaseio.com/form.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault()

    btnSubmit.addEventListener('click', () => {
        postDB(email.value)
        email.value = '',
        pass.value = '',
        btnSubmit.disabled = true
    })
}
