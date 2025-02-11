const heroBtn = document.querySelector('.hero-button')
const closeBtn = document.querySelector(".modal-close")

heroBtn.addEventListener('click', () => {
    document.body.classList.add('is-modal-open')
})

closeBtn.addEventListener('click', () => {
    document.body.classList.remove('is-modal-open')
})

