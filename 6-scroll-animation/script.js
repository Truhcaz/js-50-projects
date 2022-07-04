
const contents = document.querySelectorAll(".content");

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight * 0.8; 
    
    contents.forEach(content=>{
        const contentTop = content.getBoundingClientRect().top;

        if (contentTop < triggerBottom){
            content.classList.add('show');
        }else{
            content.classList.remove('show');
        }
    })
}