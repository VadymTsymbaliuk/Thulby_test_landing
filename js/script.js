
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

let slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('. our_guides', slideUp)
ScrollReveal().reveal('.people_and_society', slideUp)
ScrollReveal().reveal('.some_of_the_features', slideUp)
ScrollReveal().reveal('.guide_interviews', slideUp)
ScrollReveal().reveal('.keepInTouch', slideUp)
