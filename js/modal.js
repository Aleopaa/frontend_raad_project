const modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})

