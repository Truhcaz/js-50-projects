
const circle = document.querySelectorAll(".circle");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progressBar = document.querySelector(".progress")
let cpt = 1;

function addActive(circle){
    circle.classList.add("active");
    cpt++;

    console.log(cpt);
}
function removeActive(circle){
    cpt--;
    circle.classList.remove("active");
}

function disableBtn(){
    if (cpt == 2){
        prevBtn.disabled=false;
    }
    else if (cpt < 2){
        prevBtn.disabled=true;
    }
    else if (cpt==4){
        nextBtn.disabled=true;
    }else if (cpt<4){
        nextBtn.disabled=false;
    }
}

function updateProgress(){

    switch (cpt) {
        case 1:
            progressBar.style.width = '0%';
            break;
        case 2:
            progressBar.style.width = '33%';
            break;
        case 3:
            progressBar.style.width = '66%';
            break;
        case 4:
            progressBar.style.width = '100%';
            break;
    
        default:
            break;
    }
}

nextBtn.addEventListener("click", function(){
    addActive(circle[cpt]);
    disableBtn();
    updateProgress();

});

prevBtn.addEventListener("click", function(){
    removeActive(circle[cpt-1]);
    disableBtn();
    updateProgress();
});