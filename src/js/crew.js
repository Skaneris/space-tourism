const crew = function () {
    const crew = [
        {
            name: "Douglas Hurley",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-douglas-hurley.png?alt=media&token=934d8c32-b33b-4133-850a-a74bd8b08a8b",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-douglas-hurley.webp?alt=media&token=63f0806b-b40b-44cb-b0e7-619d0678803d"
            },
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            name: "Mark Shuttleworth",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-mark-shuttleworth.png?alt=media&token=66353c09-8e2d-4392-bcf2-bf743c27fc4b",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-mark-shuttleworth.webp?alt=media&token=9d089161-959f-4f12-896e-74445219a6e1"
            },
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            name: "Victor Glover",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-victor-glover.png?alt=media&token=278cd2e3-517b-46a5-9dcd-5740c9a29880",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-victor-glover.webp?alt=media&token=6f5b5366-6781-4093-833d-81ed88205836"
            },
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            name: "Anousheh Ansari",
            images: {
                png: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-anousheh-ansari.png?alt=media&token=28126518-21ad-482f-9a6b-9c2866ddb3bf",
                webp: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/crew%2Fimage-anousheh-ansari.webp?alt=media&token=7734fbca-ba5e-437b-8ebd-c24230077cc2"
            },
            role: "Flight Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]

    const nav = document.querySelector('.crew__nav')
    crew.forEach((item, idx) => {
        const button = document.createElement('button')
        button.dataset.name = item.name
        if(idx === 0) button.classList.add('active')
        nav.append(button)
    })

    const imageContainer = document.querySelector('.crew__image')
    const content = document.querySelector('.crew__content')
    const renderContent = (item) => {
        imageContainer.innerHTML = ""
        content.innerHTML = ""
        imageContainer.insertAdjacentHTML('afterbegin', `
            <img src="${item.images.png}" alt="${item.name}">
        `)
        content.insertAdjacentHTML('afterbegin', `
            <h3>${item.role}</h3>
            <h1>${item.name}</h1>
            <p>${item.bio}</p>
        `)
    }

    nav.addEventListener('click', (event) => {
        const name = event.target.dataset.name
        const item = crew.find(i => i.name === name)
        renderContent(item) 
        nav.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
    })
    renderContent(crew[0])
    
}

export default crew