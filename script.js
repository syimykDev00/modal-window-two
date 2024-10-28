let headerBtn = document.querySelector('.header-button');
let closeBtn = document.querySelector('.closeBtn');
let modal = document.querySelector('.modal')

headerBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})