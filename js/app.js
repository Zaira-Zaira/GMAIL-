document.addEventListener('DOMContentLoaded', (e)=>{
  e.preventDefault()
   console.log("loaded")
    const linkList = document.querySelectorAll("header nav ul:nth-child(2) li a");
    const submitBtn = document.getElementsByTagName("input")[4]

    //create virtual element warning 

    let parent = document.querySelector("#form");
    let element = document.createElement('p')
    parent.prepend(element)

    const User = ({
      firstname: document.getElementsByTagName("input")[0],
      lastname: document.getElementsByTagName("input")[1],
      email: document.getElementsByTagName("input")[2],
      password: document.getElementsByTagName("input")[3],

          userDataControll(){
            if(!this.firstname.value || !this.lastname.value || !this.email.value || !this.password.value){
              element.innerText="Tous les champs sont obligatoires!!!"
              element.classList.add("warning")
            }
            else{
              document.location.assign("connexion.html")
              localStorage.setItem('User', this.firstname.value)
              sessionStorage.setItem('key', 'user')
            }
          }
    })


    submitBtn.addEventListener("click", (e)=> {
        e.preventDefault()
         User.userDataControll()
    })







        
  })