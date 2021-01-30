'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'),
        firstName = document.getElementById('exampleInputFirstName'),
        lastName = document.getElementById('exampleInputLastName'),
        btnSubmit = document.querySelector('.btn'),
        email = document.getElementById('exampleInputEmail1'),
        pass = document.getElementById('exampleInputPassword1');


// function postDB(formData) {
//     fetch('https://js-form-7807a-default-rtdb.firebaseio.com/form.json', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
// }

form.addEventListener('submit', submitHandler);

function valid() {
    const objInputForm = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: pass.value 
    }
    if (objInputForm.firstName.length >= 3) {
        console.log(objInputForm.firstName)
    } else {
        console.log('object')
    }
}

function submitHandler(event) {
    event.preventDefault()

    valid()
    // console.log(firstName.value)
    // console.log(lastName.value)
    // console.log(email.value)
    // console.log(pass.value)

    // btnSubmit.addEventListener('click', () => {
    //     postDB(email.value)
    //     email.value = '',
    //     pass.value = '',
    //     btnSubmit.disabled = true

    // })
 };

});