const burgerMenu = () => {
    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.header__menu')
    const close = document.querySelector('.btn__close')

    const toggleMenu = ev => menu.classList.toggle('_active')
    burger.addEventListener('click', toggleMenu)
    close.addEventListener('click', toggleMenu)
}

burgerMenu()