import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount( PokemonOptions, {
      props: {
        pokemons: mockPokemons
      }
    });
  });

  test('Should match with the snapshot', () => {

    expect( wrapper.html() ).toMatchSnapshot();

  });

  test('Must show the 4 correct options', () => {
    const liTags = wrapper.findAll('li');

    expect( liTags.length ).toBe(4);

    expect( liTags[0].text() ).toBe('bulbasaur');
    expect( liTags[1].text() ).toBe('ivysaur');
    expect( liTags[2].text() ).toBe('venusaur');
    expect( liTags[3].text() ).toBe('charmander');

  });

  test('Must emit the "selectionPokemon" event with its respective parameters when clicked a options', () => {

    const [ li1, li2, li3, li4 ] = wrapper.findAll('li');

    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect( wrapper.emitted('selectionPokemon').length ).toBe(4);

    expect( wrapper.emitted('selectionPokemon')[0] ).toEqual([1]);
    expect( wrapper.emitted('selectionPokemon')[1] ).toEqual([2]);
    expect( wrapper.emitted('selectionPokemon')[2] ).toEqual([3]);
    expect( wrapper.emitted('selectionPokemon')[3] ).toEqual([4]);

  });
});