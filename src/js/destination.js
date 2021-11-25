const destination = function () {

    const destinations = [
        {
            name: "Moon",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-moon.png?alt=media&token=6e21a839-cde1-4fc2-a689-09e62438bba9",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-moon.webp?alt=media&token=4b66bf90-dc25-447d-aad9-f260a199bfa3"
            },
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days"
        },
        {
            name: "Mars",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-mars.png?alt=media&token=057ee7d4-9518-43b1-9657-245532439b25",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-mars.webp?alt=media&token=dd4ac1ac-85d3-4a34-9ead-2937b8746ef3"
            },
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
        },
        {
            name: "Europa",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-europa.png?alt=media&token=c0c4dd73-5a99-439a-a644-7e95457fd35c",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-europa.webp?alt=media&token=a14c93a4-3ab6-47c0-baaf-9a546b5fbfd7"
            },
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years"
        },
        {
            name: "Titan",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-titan.png?alt=media&token=567cbe9d-1dd3-40d8-ad7f-5cb9dd8340fb",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/destination%2Fimage-titan.webp?alt=media&token=59719416-cb52-4c42-9611-53155704c220"
            },
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years"
        }
    ]

    const nav = document.querySelector('.dest__nav')
    destinations.forEach((item, idx) => {
        const button = document.createElement('button')
        button.textContent = item.name
        if(idx === 0) button.classList.add('active')
        nav.append(button)
    })

    const imageContainer = document.querySelector('.dest__image')
    const content = document.querySelector('.dest__content')
    const renderContent = (item) => {
        imageContainer.innerHTML = ""
        content.innerHTML = ""
        imageContainer.insertAdjacentHTML('afterbegin', `
            <img src="${item.images.png}" alt="${item.name}">
        `)
        content.insertAdjacentHTML('afterbegin', `
            <h1>${item.name}</h1>
            <p>${item.description}</p>
            <div class="dest__dim">
                <div>
                    <h4>AVG. DISTANSE</h4>
                    <h3>${item.distance}</h3>
                </div>
                <div>
                    <h4>EST. TRAVEL TIME</h4>
                    <h3>${item.travel}</h3>
                </div>
            </div>
        `)
    }

    nav.addEventListener('click', (event) => {
        const name = event.target.textContent
        const item = destinations.find(i => i.name === name)
        renderContent(item) 
        nav.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
    })
    renderContent(destinations[0])
    
}

export default destination