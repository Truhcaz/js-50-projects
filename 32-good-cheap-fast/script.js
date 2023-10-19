const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    console.log(theClickedOne === good)
    console.log(good.checked)
    console.log(cheap.checked)
    console.log(fast.checked)
    if(good.checked && cheap.checked && fast.checked){


        if(good === theClickedOne){
            console.log("checked good")
            fast.checked = false
        }

        if(cheap === theClickedOne){
            console.log("checked cheap")
            good.checked = false
        }

        if(fast === theClickedOne){
            console.log("checked fast")
            cheap.checked = false
        }
        
    }
}