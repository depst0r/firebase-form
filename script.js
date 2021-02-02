window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const form = document.querySelector('form'),
        btnSubmit = document.querySelector('.btn');
        // firstName = document.getElementById('exampleInputFirstName'),
        // lastName = document.getElementById('exampleInputLastName'),
      
        // email = document.getElementById('exampleInputEmail1'),
        // pass = document.getElementById('exampleInputPassword1');

    function submitForm(formData) {
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

    const objValueForm = {}

    function isValid(elem) {
        const _regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const _regExpName = /^[A-Za-z0-9]{3,3}$/

        switch (elem.id) {
            case 'exampleInputFirstName':
                _regExpName.test(elem.value) ? (elem.nextElementSibling.textContent = '', objValueForm.firstName = elem.value)
                : ( elem.nextElementSibling.textContent = 'Min length 3 simbol')
                break;
            case 'exampleInputLastName':
                _regExpName.test(elem.value) ? (elem.nextElementSibling.textContent = '', objValueForm.lastName = elem.value)
                : (elem.nextElementSibling.textContent = 'Min length 3 simbol')
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
        };
        console.log(objValueForm)

    };
           


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
    
    let isValidate = false

        for (let elements of form.elements) {
            if (!elements.classList.contains('btn')) {
                if (elements.value === '') {
                    elements.nextElementSibling.textContent = 'This field is empty'
                    isValidate = false
            } else {
                elements.nextElementSibling.textContent = ''
                isValidate = true
            }
        }
        
    };

    if (isValidate) {
        submitForm(form)
    } else {
        alert('Форма не отправлена')
    }
    

  };
});