// replaceChild('new', 'old')

const result = document.querySelector('#result')
const first = document.querySelector('.red')

const bodyDiv = document.createElement('div')
const text = document.createTextNode('a simple body div')
bodyDiv.appendChild(text)
document.body.insertBefore(bodyDiv, result) //result elementamde amatebs bodyDiv-s

const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText)
heading.classList.add('blue')

result.insertBefore(heading, first) //meore varianti damatebis

const smallHeading = document.createElement('h6')
const smallText = document.createTextNode(`i'm small heading text`)
smallHeading.appendChild(smallText)
smallHeading.classList.add('red')

document.body.replaceChild(smallHeading, bodyDiv)