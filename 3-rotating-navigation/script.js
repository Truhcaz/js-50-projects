const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");

closeBtn.addEventListener("click", ()=>{
    container.classList.remove("show-nav");
    closeBtn.style.display="none" 
    openBtn.style.display="initial"    
});

openBtn.addEventListener("click", ()=>{
    container.classList.add("show-nav");    
    closeBtn.style.display="initial" 
    openBtn.style.display="none" 
});