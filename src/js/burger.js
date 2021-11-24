const burgerMenu = () => {
    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.header__menu')
    const close = document.querySelector('.btn__close')

    const mobileMenuClose = (overlay) => {
        overlay.classList.remove('_active')
        menu.classList.remove('_active')
        setTimeout(() => overlay.remove(), 600)
    }

    burger.addEventListener('click', () => {
        menu.classList.add('_active')
        const overlay = document.createElement("div")
        overlay.classList.add('overlay')
        document.body.append(overlay)
        setTimeout(() => overlay.classList.add('_active'), 0)
        
        overlay.onclick = () => {
            mobileMenuClose(overlay)
        }
    })

    close.addEventListener('click', () => {
        const overlay = document.querySelector('.overlay')
        mobileMenuClose(overlay)
    })
}

burgerMenu()