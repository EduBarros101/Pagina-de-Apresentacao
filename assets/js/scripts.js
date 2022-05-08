let arrowDiv = document.querySelector('#arrow')
let arrowImg = document.querySelector('#animation')
let aboutParagraph = document.querySelector('#about > p')

function displayAbout() {
    arrowImg.classList.toggle('rotate')
    aboutParagraph.classList.toggle('active')
}

arrowImg.addEventListener('click', displayAbout)
