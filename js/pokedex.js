const pokemonImg = document.querySelector('.pokemon_image');
const pokemonId = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');

const formSearch = document.querySelector('.form_search');
const inputSearch = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async(pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status===200){
        const dados = await APIResponse.json();
        return dados;
    }
}

const renderPokemon = async (pokemon) =>{
    pokemonId.innerHTML= '';
    pokemonName.innerHTML='Carregando...'

    const dados = await fetchPokemon(pokemon);

    if(dados){
        pokemonImg.style.display='block'
        pokemonId.innerHTML= dados.id + ' - ';
        pokemonName.innerHTML= dados.name ;
        pokemonImg.src= dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        inputSearch.value='';
        searchPokemon=dados.id;
    }else{
        pokemonImg.style.display='none'
        pokemonId.innerHTML= '';
        pokemonName.innerHTML='Não encontrado :('
    }
}

formSearch.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(inputSearch.value.toLowerCase());
});

buttonPrev.addEventListener('click', ()=>{
    if(searchPokemon>1){
        searchPokemon -=1;
        renderPokemon(searchPokemon)
    }
});

buttonNext.addEventListener('click', ()=>{
   searchPokemon +=1;
   renderPokemon(searchPokemon)
});

renderPokemon('1')