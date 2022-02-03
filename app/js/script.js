
const form = document.querySelector('.form-container')
const subscribeForm = document.querySelector('.form-container')
const loader = document.querySelector('.loader-bg')

$.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-zA-Zа-яА-Я]+$/i.test(value);
}, "Letters and spaces only please");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    $(".form_validate").validate({
        rules: {
            firstName: {
                required: true,
                lettersonly: true,
                minlength: 2
            },
            lastName: {
                required: true,
                lettersonly: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            firstName: "Please specify your name",
            lastName: "Please specify your email",
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        },
        focusInvalid: true,
        errorClass: "input_error",
        submitHandler: function (form) {
            subscribeForm.classList.toggle('active')
            loader.classList.toggle('active')

            document.querySelector('#firstName').value = ''
            document.querySelector('#lastName').value = ''
            document.querySelector('#email').value = ''
            setTimeout(()=>{
                subscribeForm.classList.toggle('active')
                loader.classList.toggle('active')
            },3000)
            // form.submit();
        }

    })

})

//
let searchButton = document.querySelector('.btn-search')
searchButton.addEventListener('click', function (e){
    e.preventDefault()
    let searchInput = document.querySelector('.form__form_input_input_search')

    searchInput.classList.add('slideRight')
    searchInput.classList.add('block')
})


ScrollReveal().reveal('.block_animation', {
    duration: 1000,
    easing: 'ease-out',
    distance: '25%',
    scale: 0.25,
    origin: 'left',
    rotate: {
        y: 120,
        z: 90,
    },
})
