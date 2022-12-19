<template>
  <h2 v-if="!pokemon">Espere por favor...</h2>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />

    <PokemonOptions
      :pokemons="pokemonArr"
      @selectionPokemon="checkAnswer"
    />

    <template v-if="showAnswer" >
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions();

      const randomInt = Math.floor( Math.random() * 4 );
      this.pokemon = this.pokemonArr[ randomInt ];
    },
    checkAnswer( selectedId ) {
      this.showPokemon = true;
      this.showAnswer = true;

      if( selectedId === this.pokemon.id ) {
        this.message = `Correcto, ${ this.pokemon.name }`;
      } else {
        this.message = `Oops, era ${ this.pokemon.name }`;
      }
    },
    newGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];

      this.mixPokemonArr();
    }
  },
  mounted() {
    this.mixPokemonArr();
  }
}
</script>

<style>

</style>