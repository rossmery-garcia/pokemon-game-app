<template>
  <h1>¿Quién es este Pokémon?</h1>

  <PokemonPicture :pokemonId="4" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArr" />

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log( getPokemonOptions() );

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions();
      console.log(this.pokemonArr)
    }
  },
  mounted() {
    this.mixPokemonArr();
  }
}
</script>

<style>

</style>