document.addEventListener('DOMContentLoaded', ()=>{
    const linkList = document.querySelectorAll("header nav ul:nth-child(2) li a");
    const submitBtn = document.getElementsByTagName("input")[4]

    for (let i = 0; i < linkList.length; i++) {
      linkList[i].addEventListener("click", () => {
        for (let i = 0; i < linkList.length; i++) {
          linkList[i].classList.remove("redTheme");
          linkList[i].classList.add("lightTheme");
        }
        linkList[i].classList.remove("lightTheme");
        linkList[i].classList.add("redTheme");
      });
    }

    let parent = document.querySelector("#form");
    let element = document.createElement('p')
    parent.prepend(element)

    let checkmail =/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    let checkPassword =  /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,30}$/

    let User = {
      firstname: document.getElementsByTagName("input")[0],
      lastname: document.getElementsByTagName("input")[1],
      email: document.getElementsByTagName("input")[2],
      password: document.getElementsByTagName("input")[3],
          userDataControll(){
            if(this.firstname.value && this.lastname.value && this.email.value && this.password.value)
            {
              document.location.assign("connexion.html")
              localStorage.setItem('User', this.firstname.value)
              sessionStorage.setItem('key', 'user')
              sessionStorage.setItem('firstname', this.firstname.value)
              sessionStorage.setItem('email', this.email.value)
              sessionStorage.setItem('password', this.password.value)
              localStorage.setItem('formdata', this.userdata)
              return true;
            }
            else if(!this.firstname.value || !this.lastname.value || !this.email.value || !this.password.value){
              element.innerText += "Tous les champs sont obligatoires!!!"
              element.classList.add("warning")
              return false;
            }
            else if(checkmail.exec(this.email.value && checkPassword.exec(this.password.value))){
              element.innerText += "Veuillez saisir les champs correctement!"
              return false;
            }
          }
    }


    submitBtn.addEventListener("click", (e)=> {
      e.preventDefault();

      if(User.userDataControll()){
        document.location.assign("connexion.html")
      }else{
        false;
      }
    
    })







        
  })