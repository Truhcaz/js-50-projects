const panels = document.querySelectorAll(".panel");


function removeActive(){
    for (let panel of panels){
        panel.classList.remove("active");
    }
}

for (let panel of panels){
    panel.addEventListener('click', function(){

        if (!panel.classList.contains("active")){
            removeActive();
            console.log(panel.innerText);
            panel.classList.add("active"); 
        }
            
    });
}
