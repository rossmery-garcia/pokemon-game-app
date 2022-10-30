import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonPage component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount( PokemonPage );
  });

  test('Should match with the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot();
  });

  test('Should call mixPokemonArr on mount', () => {

    const mixPokemonArrSpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArr');
    wrapper = shallowMount( PokemonPage );

    expect( mixPokemonArrSpy ).toHaveBeenCalled();
  });

  test('Should match the snapshot when loading pokemon', () => {

    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      }
    });

    expect( wrapper.html() ).toMatchSnapshot();
  });

  test('Should show PokemonPicture and PokemonOptions components', () => {

    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      }
    });

    const pokemonPictureComponent = wrapper.find('pokemon-picture-stub');
    const pokemonOptionsComponent = wrapper.find('pokemon-options-stub');

    expect( pokemonPictureComponent.exists() ).toBeTruthy();
    expect( pokemonOptionsComponent.exists() ).toBeTruthy();

    expect( pokemonPictureComponent.attributes('pokemonid') ).toBe('1');
    expect( pokemonOptionsComponent.attributes('pokemons') ).toBeTruthy();
  });
})