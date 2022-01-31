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

