

// ======== this part is all for theme toggling 
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".darkmode");
const themeContainer = document.querySelector(".theme-container");
const themeRoller = document.querySelector(".theme-rolling")
let themes = localStorage.getItem("themes");

const enableDarkMode = ()=>{
    document.body.classList.add("darktime");
    localStorage.setItem("themes", "themeEnaled");
}

const disableDarkMode = ()=>{
    document.body.classList.remove("darktime");
    localStorage.setItem("themes", null);
}

 if(themes === "themeEnabled"){
     enableDarkMode();
 }


themeContainer.addEventListener("click", ()=>{
    themes = localStorage.getItem("themes")
   if(themes !== "themeEnabled"){
       enableDarkMode();
       console.log("enabled");
   }
   else{
       disableDarkMode();
       console.log("disabled");
   }
})

