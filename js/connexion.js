document.addEventListener('DOMContentLoaded', ()=>{
     
    let target = document.querySelector('h1')
    let userData = localStorage.getItem("User")
    target.innerText+=` ${userData}`
    let SignInBtn = document.querySelector('.signIn')

    SignInBtn.addEventListener("click", ()=>{
        document.location.assign("index.html")
        localStorage.clear()
    })

})
