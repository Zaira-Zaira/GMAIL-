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



    let email = sessionStorage.getItem('email');
    let  passwordUser = sessionStorage.getItem('password');



   let logIn = {
    login: document.querySelector('#login'),
    password: document.querySelector('#password'),

    
        userDataControll(){
          if(this.login.value == email && this.password.value == passwordUser)
          {
            element.innerText += "Vous êtes connecté"
            element.classList.add("success")
            return true;
          }
          else if(login.value == "" || passwordUser == ""){
            element.innerText += "Tous les champs sont obligatoires!!!"
            element.classList.add("warning")
            return false;
          }
          else if(this.password != passwordUser) {
            element.innerText += "Mot de passe incorrect"
            element.classList.add("warning")
          }
        }
  }

  submit.addEventListener('click', (e)=> {
    e.preventDefault()
    logIn.userDataControll()
  })



})
