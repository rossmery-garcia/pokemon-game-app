import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {

  test('getPokemons method should return an array of numbers', () => {

    const pokemonIds = getPokemons();

    expect( pokemonIds.length ).toBe(650);
    expect( pokemonIds[0] ).toBe(1);
    expect( pokemonIds[649] ).toBe(650);
  });

  test('getPokemonNames method should return an array of pokemon names', async () => {

    const pokemonNames = await getPokemonNames( [1, 2, 3, 4] );

    expect( pokemonNames ).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ]);

  });

  test('getPokemonOptions method should return a mixed array', async () => {

    const pokemons = await getPokemonOptions();

    expect( pokemons.length ).toBe(4);
    expect( pokemons ).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      },
      {
        name: expect.any(String),
        id: expect.any(Number)
      }
    ]);
  });
});