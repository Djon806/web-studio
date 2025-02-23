const burgerBtn = document.querySelector('.burger-button')

burgerBtn.addEventListener('click', () => {
     document.body.classList.toggle('is-menu-open')
})