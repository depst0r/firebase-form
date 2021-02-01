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
        switch (elem.id) {
            case 'exampleInputFirstName':
                elem.value.length >= 3 ? elem.nextElementSibling.textContent = ''
                : ( elem.nextElementSibling.textContent = 'Min length 3 simbol')
            case 'exampleInputLastName':
                elem.value.length >= 3 ? elem.nextElementSibling.textContent = ''
                : elem.nextElementSibling.textContent = 'Min length 3 simbol'
            default:
                break;
        }
        
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