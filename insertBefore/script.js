//insertBefore('element', 'location')

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