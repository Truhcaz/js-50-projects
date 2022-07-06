
const jokeText = document.getElementById("joke");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click", function(){
    generateJoke();
})
generateJoke();

function generateJoke(){

    fetch("https://icanhazdadjoke.com/", {
        headers:{
            'Accept':'application/json'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then(function(data){
        jokeText.innerText = data.joke
    })
    .catch(function(error){
        return error;
    })

}