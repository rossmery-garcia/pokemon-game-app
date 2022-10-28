import pokemonApi from '@/api/pokemonApi';

describe('Pokemon API', () => {

  test('Axios must be configured with Pokemon API', () => {
    console.log(pokemonApi.defaults.baseURL)
    expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon');
  });
})