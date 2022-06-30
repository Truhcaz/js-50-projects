
const searchBtn = document.getElementById("loop");
const searchBar = document.querySelector(".search");
let active = 0;

searchBtn.addEventListener("click", ()=>{
    
    if (active === 0){
        searchBar.classList.add("active");
        active++;
    }
    else{
        searchBar.classList.remove("active");
        active--;
    }
})