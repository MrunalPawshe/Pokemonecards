const search_term = document.getElementById('search_box')
const search_btn = document.getElementById('search-btn')

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

// api https://pokeapi.co/docs/v2#pokemon
const getPokemonData = async term => {
    document.getElementById('show_error').classList.remove('show')
    document.getElementById('show_error').classList.add('hidden')
        
    const url = `https://pokeapi.co/api/v2/pokemon/${term}`
    const response = await fetch(url)

    if(response.status == 404 || response.statusText == 'Not Found'){
        document.getElementById('show_error').classList.add('show')
        document.getElementById('show_error').classList.remove('hidden')
        return
    }

    const pokemon = await response.json()
    debugger

    // update ui with data 
    document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('update_name').innerHTML = pokemon.name
    document.getElementById('update_hp').innerHTML = `HP: ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`
    document.getElementById('update_xp').innerHTML = `XP: ${pokemon.base_experience}`
    document.getElementById('update_type').innerHTML = `Type: ${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
    document.getElementById('update_weight').innerHTML = `Weight: ${pokemon.weight}kg`
    document.getElementById('update_height').innerHTML = `Height: 0.${pokemon.height}m`
    document.getElementById('update_attack').innerHTML = `Attack: ${Math.floor((Math.random() * pokemon.stats[1].base_stat) + 1)}/${pokemon.stats[1].base_stat}`
    document.getElementById('update_defense').innerHTML = `Defense: ${Math.floor((Math.random() * pokemon.stats[2].base_stat) + 1)}/${pokemon.stats[2].base_stat}`
    document.getElementById('update_speed').innerHTML = `Speed: ${Math.floor((Math.random() * pokemon.stats[3].base_stat) + 1)}/${pokemon.stats[3].base_stat}`
    document.getElementById('update_species').innerHTML = `Species: ${pokemon.species.name}`

}

search_btn.addEventListener('click', () => getPokemonData(search_term.value))