// Web Storage API - provided by browser
// session storage, local storage 
// setItem, getItem, removeItem, clear //metodebis saxelebi

// localStorage.setItem('name', 'john')
// sessionStorage.setItem('name', 'john')

localStorage.setItem('name', 'john')
localStorage.setItem('friend', 'peter')
localStorage.setItem('job', 'developer')
localStorage.setItem('address', 'street 123')

const name = localStorage.getItem('name') //igebs "name" "key-s" values
console.log(name);

localStorage.removeItem('name')  //es shlis konkretul "key-s"

const anotherName = localStorage.getItem('name')
console.log(anotherName);

localStorage.clear()  //es shlis mtlianad local storage-is infos