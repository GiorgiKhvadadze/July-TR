// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default



const container = document.querySelector('.container')
// const heading = document.querySelector('.heading')
const btn = document.querySelector('.btn')

function sayHello(){
    console.log(`hello there`);
}

btn.addEventListener('click', function(){
    const element = document.createElement('h1')
    element.classList.add('heading')
    element.textContent = `i'm inside the container`
    container.appendChild(element)
})

container.addEventListener('click', function(e){
    if(event.target.classList.contains('heading')){
        console.log(`hello there`);
    }
})

// heading.addEventListener('click', sayHello)