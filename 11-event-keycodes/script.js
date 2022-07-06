const insert = document.getElementById('insert');

window.addEventListener("keydown", keyPressed => {

    insert.innerHTML = `
    <div class="key">
    ${keyPressed.key === ' ' ? 'Space' : keyPressed.key} <small> event.key </small> 
    </div> 
    <div class="key">
    ${keyPressed.keyCode} <small> event.keyCode </small> 
    </div>
    <div class="key">
    ${keyPressed.code} <small> event.code </small> 
    </div>
    
    `
})
