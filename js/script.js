const icon = document.getElementById("toggle_icon");
const body = document.querySelector("body");
const icon_shecvla =()=>{
    console.log(icon.classList);
    if(icon.classList=="fa-solid fa-toggle-off"){
        icon.classList="fa-solid fa-toggle-on";
        
        body.classList.add("dark-theme");
        
    }else{
        icon.classList.value="fa-solid fa-toggle-off";
        body.classList.remove("dark-theme");
        
        console.log(icon.classList.value);
    }
}
icon.addEventListener("click", icon_shecvla);



