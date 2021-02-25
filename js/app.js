document.addEventListener('DOMContentLoaded', (e)=>{

    const linkList = document.querySelectorAll("header nav ul:nth-child(2) li a");
  

    for (let i = 0; i < linkList.length; i++) {
      linkList[i].addEventListener("click", (e) => {
        for (let i = 0; i < linkList.length; i++) {
       //  let pressed =  (e.target.getAttribute("aria-current") === "true")
         if(e.target.getAttribute("aria-current") === "true"){
          linkList[i].classList.add("redTheme");
          // linkList[i].classList.add("whiteTheme");
          e.target.setAttribute("aria-current", "false")
         }
        }
        linkList[i].classList.remove("redTheme");
        linkList[i].classList.add("whiteTheme");
      });
    }






















    // for (let i = 0; i < linkList.length; i++) {
    //   linkList[i].addEventListener("click", (e) => {
    //    for (let i = 0; i < linkList.length; i++) {

    //         // Check to see if the button is pressed
    //   var pressed = (e.target.getAttribute("aria-current") === "true");
    //   // Change aria-pressed to the opposite state
    //   e.target.setAttribute("aria-current", !pressed);
    //   // toggle the play state of the audio file
              
    //   if(pressed){
    //     linkList[i].classList.remove("redTheme");
    //     linkList[i].classList.add("whiteTheme");
    //   }
    //   else{
    //     linkList[i].classList.add("redTheme");
    //     linkList[i].classList.remove("whiteTheme");
    //   }
    //     }
    
    //     linkList[i].classList.remove("redTheme");
    //     linkList[i].classList.add("whiteTheme");
  
    //   });
    // }

    

    // e.target.addEventListener("click", (e)=>{
    //   console.log(e.target);
    //   console.log(e.target.getAttribute("aria-current"));

    //   if(e.target.getAttribute("aria-current" == "true")){
    //     e.target.setAttribute("aria-current", "false")
    //   }
    //   else{
    //     e.target.setAttribute("aria-current", "true")
    //   }
    // })


    function toggleButton(element) {
      // Check to see if the button is pressed
      var pressed = (element.target.getAttribute("aria-current") === "true");
      // Change aria-pressed to the opposite state
      element.target.setAttribute("aria-current", !pressed);
      // toggle the play state of the audio file
     
    }
        
  })