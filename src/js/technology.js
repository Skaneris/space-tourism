const technology = function () {

    const technologies = [
        {
            name: "Launch vehicle",
            images: {
                portrait: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-launch-vehicle-portrait.jpg?alt=media&token=14a4d515-892d-4c8e-b6d6-a9def1eb3e91",
                landscape: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-launch-vehicle-landscape.jpg?alt=media&token=fa7e9ea6-c6e1-4604-821c-fa0a5f88fe8b"
            },
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            name: "Spaceport",
            images: {
                portrait: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-spaceport-portrait.jpg?alt=media&token=787586a1-f9bf-4074-9a3f-fc21af07a10e",
                landscape: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-spaceport-landscape.jpg?alt=media&token=b8fc60a6-c6a3-4e41-a666-8088dcf618ef"
            },
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            name: "Space capsule",
            images: {
                portrait: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-space-capsule-portrait.jpg?alt=media&token=a44e64be-9934-4c34-83a1-1f5da61b9809",
                landscape: "https://firebasestorage.googleapis.com/v0/b/upload-image-bf4e6.appspot.com/o/tech%2Fimage-space-capsule-landscape.jpg?alt=media&token=74ed8a6e-ef2b-4abd-8dd6-f1327698a9bd"
            },
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const nav = document.querySelector('.tech__nav')
    technologies.forEach((item, idx) => {
        const button = document.createElement('button')
        button.dataset.name = item.name
        button.textContent = idx + 1
        if(idx === 0) button.classList.add('active')
        nav.append(button)
    })

    const imageContainer = document.querySelector('.tech__image')
    const content = document.querySelector('.tech__content')
    const renderContent = (item) => {
        imageContainer.innerHTML = ""
        content.innerHTML = ""
        imageContainer.insertAdjacentHTML('afterbegin', `
            <img class="landscape" src="${item.images.landscape}" alt="${item.name}">
            <img class="portrait" src="${item.images.portrait}" alt="${item.name}">
        `)
        content.insertAdjacentHTML('afterbegin', `
            <h3>THE TERMINOLOGY ...</h3>
            <h1>${item.name}</h1>
            <p>${item.description}</p>
        `)
    }

    nav.addEventListener('click', (event) => {
        const name = event.target.dataset.name
        const item = technologies.find(i => i.name === name)
        renderContent(item) 
        nav.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
    })
    renderContent(technologies[0])
}

export default technology