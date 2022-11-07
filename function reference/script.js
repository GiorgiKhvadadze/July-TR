// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')

function changeColors(){
    let hasClass = heading.classList.contains('red') //amit vamowmebt sheicavs tu ara heading red classlists
    if(hasClass){
        heading.classList.remove('red')
    }else{
        heading.classList.add('red')
    }
}

btn.addEventListener('click', changeColors)


// test button 

const testHeading = document.querySelector('h3')
const testButton = document.querySelector('.test-btn')

function testColor(){
    const hasColor = testHeading.classList.contains('blue')
    if(hasColor){
        testHeading.classList.remove('blue')
    }else{
        testHeading.classList.add('blue')
    }
}

testButton.addEventListener('click', testColor)



// test 2 

const test2Heading = document.querySelector('h4')
const test2Button = document.querySelector('.test2-btn')


test2Button.addEventListener('click', function(){
    if(test2Heading.classList.contains('blue')){
        test2Heading.classList.remove('blue')
    }else{
        test2Heading.classList.add('blue')
    }
})