
const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=454d6d17dd5cf94b808c0fb180c68601&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=454d6d17dd5cf94b808c0fb180c68601&query="'

//Appel API
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()


    showMovies(data.results)
}

//Affiche les 20 films les plus populaires
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        
        const movieEL = document.createElement('div');
        movieEL.classList.add('movie')
        movieEL.innerHTML = 
        `<img src="${IMG_PATH + movie.poster_path}">
        <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${classByRate(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        <p> ${movie.overview}</p>
        </div>`

        main.appendChild(movieEL);
    });
}

//Couleur de la note
function classByRate(vote){
    if (vote >= 7.5)
        return 'green'
    else if (vote >= 5)
        return 'orange'
    else return 'red'
}

//Search 

const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', (e) =>{

    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !==''){
        getMovies(SEARCH_API + searchTerm)
        search.value=''
    }else{
        window.location.reload()
    }

})