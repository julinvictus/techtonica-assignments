$(document).ready(function(event) {
    fetchPokemonNames();
});

const addToPokedex = event => {
    event.preventDefault();
    let name = event.target.pokemon.value;

    let pokemonContainer = document.createElement('div');
    pokemonContainer.id = name.toLowerCase();
    let pokemonContent = document.createElement('p');
    pokemonContent.innerHTML = `${name}`;
    pokemonContainer.appendChild(pokemonContent);

    let list = document.getElementById('pokemon-list');
    list.appendChild(pokemonContainer);
};

const fetchPokemonNames = () => {
    let request = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/`;

    request.open('GET', url);
    request.send();

    request.onreadystatechange = function(){
        let htmlPokemons = '<option value="">- choose one -</option><option value="pikachu">pikachu</option>';
        if (request.readyState === 4){
            if (request.status === 200){
                let response = JSON.parse(this.response);

                response.results.forEach( data => {
                    htmlPokemons+= `<option value="${data.name}">${data.name}</option>`;
                });
            } else {
                console.log(Oops);
            }
        }
        $("#pokemon").html(htmlPokemons);
    };
};

const fetchPokemon = event => {
    let pokemon = event.target.pokemon.value.toLowerCase();

    let request = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

    request.open('GET', url);
    request.send();

    request.onreadystatechange = function(){
        if (request.readyState === 4){
            if (request.status === 200){
                let response = JSON.parse(request.responseText);

                let path = response.sprites.front_default;
                let name = response.name;

                let image = document.createElement('img');
                image.src = path;
                image.alt = name;

                let pokemonListItem = document.getElementById(name.toLowerCase());
                pokemonListItem.appendChild(image); 
            } else {
                console.log(Oops);
            }
        }
    };
};

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('pokedex');
    form.addEventListener('submit', function(){
        addToPokedex(event);
        fetchPokemon(event);
    });
});