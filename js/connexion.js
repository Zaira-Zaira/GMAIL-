document.addEventListener('DOMContentLoaded', ()=>{
     
    let target = document.querySelector('h1')
    let userData = localStorage.getItem("User")
    target.innerText+=` ${userData}`

})
