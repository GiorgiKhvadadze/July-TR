// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')  //html elementis datargeteba

btn.addEventListener('click',function(){
    heading.classList.add('red')
})