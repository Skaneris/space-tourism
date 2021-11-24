const myAnimation = function() {
    const button = document.getElementById('btn-start')
    const card = document.querySelector('.card')

    const anime = function(fn) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(true)
            }, 1000)
        })
    }

    const moveRight = () => {
        const mgn = Number(card.style.marginLeft.replace(/\D/g, ""))
        card.style.position = 'relative'
        card.style.transition = '1s'
        card.style.marginLeft = 300 + 'px'
        mgn ? card.style.marginLeft = 0 : card.style.marginLeft = 300 + 'px'
    }

    const startMove = () => {
        moveRight()
    }

    button.addEventListener('click', startMove)
}

// myAnimation()