document.addEventListener('DOMContentLoaded', ()=>{

    const linkList = document.querySelectorAll("header nav ul:nth-child(2) li a");
  
    for (let i = 0; i < linkList.length; i++) {
      linkList[i].addEventListener("click", () => {
        for (let i = 0; i < linkList.length; i++) {
          linkList[i].classList.remove("darkTheme");
          linkList[i].classList.add("lightTheme");
        }
        linkList[i].classList.remove("lightTheme");
        linkList[i].classList.add("darkTheme");
      });
    }
  
  })