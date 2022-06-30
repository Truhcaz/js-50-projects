
const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text');
let cpt = 0;
let int = setInterval(onLoad,50);
function onLoad(){
    
    cpt++;

    if (cpt > 99){
        clearInterval(int);
    }
    loadingText.style.opacity= 1-(cpt/100);
    loadingText.innerText= cpt + '%';

    let pix = cpt * (0-30)/100+30;
    bg.style.filter = `blur( ${pix}px)`;

    
}
