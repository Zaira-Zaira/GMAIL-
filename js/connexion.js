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
        e.preventDefault()
        if(login.value == email && password.value == passwordUser){
            element.innerText += "Vous êtes bien connecté";
            element.classList.add("success")
        }
        else if(login != email){
           element.innerText += "Votre login est incorrect";
           element.classList.add("warning")
        }
        else if(password != passwordUser){
           element.innerText += "Votre mot de passe est incorrect";
           element.classList.add("warning")
        }

   })



//     const checkLoginPassword = ({
//          login: document.getElementsByTagName('input')[0],
//          password: document.getElementsByTagName('input')[1],

//          firstname = sessionStorage.getItem('firstname'),
//          email = sessionStorage.getItem('email'),
//          passwordUser = sessionStorage.getItem('password'),

//          check(){
//               if(this.login.value == this.firstname || this.login.value == this.email){
//                     document.location.assign("userAccount.html")
//               }
//               else if(!this.login.value || !this.password.value  ){
//                 element.innerText += "Veuillez renseigner tous les champs"
//                 element.classList.add("warning")
//               }
//               else if(this.login.value != this.firstname || this.login.value != this.email){
//                  element.innerText += "Votre login est incorrect"
//                  element.classList.add("warning")
//              }
//              else if(this.password.value != this.passwordUser){
//                  element.innerText += "Votre mot de passe est incorrect"
//                  element.classList.add("warning")
//              }
//          }
//     })


//      submit.addEventListener('click', (e)=>{
//         e.preventDefault()
//         checkLoginPassword.check()
//      })



})
