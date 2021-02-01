window.addEventListener('DOMContentLoaded', () => {
    'use strict'

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

    function isValid(elem) {
        const _regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

        const objValueForm = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            password: pass.value.trim() 
        }

        switch (elem.id) {
            case 'exampleInputFirstName':
                elem.value.length >= 3 ? (elem.nextElementSibling.textContent = '', objValueForm.firstName = elem.value)
                : ( elem.nextElementSibling.textContent = 'Min length 3 simbol')
                break;
            case 'exampleInputLastName':
                elem.value.length >= 3 ? (elem.nextElementSibling.textContent = '', objValueForm.lastName = elem.value)
                : elem.nextElementSibling.textContent = 'Min length 3 simbol'
                break;
            case 'exampleInputEmail1':
                _regExpEmail.test(elem.value) ? (elem.nextElementSibling.textContent = '', objValueForm.email = elem.value) 
                : elem.nextElementSibling.textContent = 'Enter valid email'
                break;
            case 'exampleInputPassword1':
                elem.value.length >= 6 ? (elem.nextElementSibling.textContent = '' , objValueForm.password = elem.value)
                : elem.nextElementSibling.textContent = 'The minimum password length is 6 characters'
                break;
            default:
                break;
        }
        console.log(objValueForm)
        
    }

        for (let elements of form.elements) {
            if (!elements.classList.contains('btn')) {
                elements.addEventListener('input', () => {
                    isValid(elements)
                })
        }
        
    };

form.addEventListener('submit', submitHandler);

function submitHandler(event) {

    event.preventDefault()

    //    const objValueForm = {
    //     firstName: firstName.value.trim(),
    //     lastName: lastName.value.trim(),
    //     email: email.value.trim(),
    //     password: pass.value.trim() 
    // }

    // postDB(objValueForm)

        // lastName.value = '',
        // firstName.value = '',
        // email.value = '',
        // pass.value = ''
        // btnSubmit.disabled = true

        for (let elements of form.elements) {
            if (!elements.classList.contains('btn')) {
                if (elements.value === '') {
                    elements.nextElementSibling.textContent = 'This field is empty'
            } else {
                elements.nextElementSibling.textContent = ''
            }
        }
        
    };

  };

});