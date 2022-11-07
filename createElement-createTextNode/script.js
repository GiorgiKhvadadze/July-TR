// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector('#result')

// create empty element

const bodyDiv = document.createElement('div') //axali elementis div-is sheqmna

// create text node

const text = document.createTextNode('a simple body div') //textis sheqmna
bodyDiv.appendChild(text) //text gavxadet bodyDiv-is shvili
document.body.appendChild(bodyDiv) //bodyDiv davamatet html body seqciashi

const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText)
heading.classList.add('blue')

result.appendChild(heading) //result klasshi headingis damateba

console.log(result.children) //amit vgebulobt romeli children gaachnia id-s