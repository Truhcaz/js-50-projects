const btnsEl = document.querySelectorAll('nav ul li')
const contents = document.querySelectorAll('.content')

btnsEl.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{

        hideAllContent()
        removeAllActive()
        
        btn.classList.add('active')
        contents[index].classList.add('show')

    })
})

function hideAllContent(){
    contents.forEach((content) => {
        content.classList.remove('show')
    })
}

function removeAllActive(){
    btnsEl.forEach((btn) => {
        btn.classList.remove('active')
    })
}