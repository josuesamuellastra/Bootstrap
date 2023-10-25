console.log("Hola soy Lastra");
const getAllPokemon = async(Nom) => {
    const Pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/" + Nom);
    const Pokemonjs = await Pokemons.json();
    const Pikashu = Pokemonjs.name;
    const habilidad = Pokemonjs.abilities[0].ability.name
    console.log("Nombre: ", Pikashu)
    console.log(habilidad)

    const Ataques = Pokemonjs.stats[1].base_stat
    console.log(Ataques)
    const defensa = Pokemonjs.stats[2].base_stat
    console.log(defensa)

    const imagen = Pokemonjs.sprites.front_female
    console.log(imagen)
    const none = document.createElement("img")
    none.src = imagen
    document.getElementById("Pokebolas").appendChild(none)

    /*const altura = Pokemonjs.game_index.height.name
    console.log(altura)*/

    const tipoP = Pokemonjs.types[0].type.name
    console.log(tipoP)
}
getAllPokemon("pikachu")