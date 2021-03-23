document.addEventListener('DOMContentLoaded', ()=>{
     
     
    let target = document.querySelector('h1')
    let userData = localStorage.getItem("User")
    target.innerText += ` ${userData}`
    let SignInBtn = document.querySelector('.signIn')
    let submit =   document.getElementsByTagName('input')[2]


    
    SignInBtn.addEventListener("click", ()=>{
        document.location.assign("index.html")
        localStorage.clear()
    })


    let parent = document.querySelector("#connexionForm");
    let element = document.createElement('p')
    parent.prepend(element)



   let login = document.querySelector('#login');
   let password = document.querySelector('#password');

   let email = sessionStorage.getItem('email');
   let passwordUser = sessionStorage.getItem('password');

   
    submit.addEventListener('click', (e)=>{
        if(login.value == email && password.value == passwordUser){
            element.innerText += "Vous êtes bien connecté";
            element.classList.add("success")
        }
        else if(login != email){
           element.innerText += "Votre login est incorrect";
           element.classList.add("warning")
           e.preventDefault()
        }
        else if(password != passwordUser){
           element.innerText += "Votre mot de passe est incorrect";
           element.classList.add("warning")
           e.preventDefault()
        }

   })



})
