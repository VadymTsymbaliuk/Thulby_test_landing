
const form = document.querySelector('.form-container')
const subscribeForm = document.querySelector('.form-container')
const loader = document.querySelector('.loader-bg')

form.addEventListener('submit', (e) => {
     e.preventDefault()
    subscribeForm.classList.toggle('active')
    loader.classList.toggle('active')

    document.querySelector('#firstName').value = ''
    document.querySelector('#lastName').value = ''
    document.querySelector('#email').value = ''
    setTimeout(()=>{
        subscribeForm.classList.toggle('active')
        loader.classList.toggle('active')
    },3000)
})

//
let searchButton = document.querySelector('.btn-search')
searchButton.addEventListener('click', function (e){
    e.preventDefault()
    let searchInput = document.querySelector('.form__form_input_input_search')

    searchInput.classList.add('slideRight')
    searchInput.classList.add('block')
})




ScrollReveal().reveal('.people_and_society-bg', {
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
ScrollReveal().reveal('.col-4', {
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

ScrollReveal().reveal('.col-lg-4', {
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
ScrollReveal().reveal('.guide_interviews_title', {
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
ScrollReveal().reveal('.keepInTouch', {
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

