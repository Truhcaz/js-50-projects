// tout les pokemons de la 4g 
//const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386/"

const pokeContainer = document.getElementById('poke-container')
const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

const mainTypes = Object.keys(colors)

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`
    const res = await fetch(url)
    const data = await res.json()

    data.results.forEach(pokemon => {
        getPokemon(pokemon.url)
    });
}

const getPokemon = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1) //met la premiere lettre en maj
    const pokeTypes = pokemon.types.map(type => type.type.name)
    const firstType = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    const secondType = mainTypes.find(type => pokeTypes.indexOf(type) === 1)
    const firstColor = colors[firstType];
    const secondColor = colors[secondType];

    pokemonEl.style.background = `linear-gradient(to bottom, ${firstColor} 50%, ${secondType? secondColor : firstColor} 50%)`

    const pokemonInnerHTML = `
        <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
          <span class="number">#${pokemon.id}</span>
          <h3 class="name"> ${name}</h3>
          <small class="type">Type : <span> ${firstType}${secondType? '/'+secondType : ''} </span></small>
        </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    pokeContainer.appendChild(pokemonEl)
}

fetchPokemon()


