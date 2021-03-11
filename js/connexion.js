document.addEventListener('DOMContentLoaded', ()=>{
     
     
    let target = document.querySelector('h1')
    let userData = localStorage.getItem("User")
    target.innerText+=` ${userData}`
    let SignInBtn = document.querySelector('.signIn')
    let formdata = localStorage.getItem('formdata')
    let submit =   document.getElementsByTagName('input')[2]

    
    SignInBtn.addEventListener("click", ()=>{
        document.location.assign("index.html")
        localStorage.clear()
    })


    let parent = document.querySelector("#form");
    let element = document.createElement('p')
    parent.prepend(element)



    const checkLoginPassword = ({
         login: document.getElementsByTagName('input')[0],
         password: document.getElementsByTagName('input')[1],
         formdata: localStorage.getItem("formdata"),


         firstname = sessionStorage.getItem('firstname'),
         email = sessionStorage.getItem('email'),
         passwordUser = sessionStorage.getItem('password'),

         check(){
              if(this.login.value == this.firstname || this.login.value == this.email){
                    document.location.assign("userAccount.html")
              }
              else if(!this.login.value || !this.password.value  ){
                element.innerText += "Veuillez renseigner tous les champs"
                element.classList.add("warning")
              }
              else if(this.login.value != this.firstname || this.login.value != this.email){
                 element.innerText += "Votre login est incorrect"
                 element.classList.add("warning")
             }
             else if(this.password.value != this.passwordUser){
                 element.innerText += "Votre mot de passe est incorrect"
                 element.classList.add("warning")
             }
         }
    })


     submit.addEventListener('click', (e)=>{
        e.preventDefault()
        checkLoginPassword.check()
     })



})
