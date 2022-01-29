const btnSubscribe = document.querySelector('.subscribe')
const subscribeForm = document.querySelector('.form-container')
const loader = document.querySelector('.loader-bg')

btnSubscribe.addEventListener('click', (e) => {
    e.preventDefault()
    subscribeForm.classList.toggle('active')
    loader.classList.toggle('active')

    setTimeout(()=>{
        subscribeForm.classList.toggle('active')
        loader.classList.toggle('active')
    },3000)
})