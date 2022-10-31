import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture component', () => {

  test('Should match with the snapshot', () => {

    const wrapper = shallowMount( PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    });

    expect( wrapper.html() ).toMatchSnapshot();
  });

  test('Should show the hidden image and the pokemon 100', () => {

    const wrapper = shallowMount( PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    });

    const [ img1, img2 ] = wrapper.findAll('img');

    expect( img1.exists() ).toBeTruthy();
    expect( img2 ).toBe(undefined);
    expect( img1.classes('hidden-pokemon') ).toBe(true); //-- or toBeTruthy() --

    expect( img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

  });

  test('Should show the pokemon picture if showPokemon:true', () => {

    const wrapper = shallowMount( PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true
      }
    });

    const img = wrapper.find('img');

    expect( img.exists() ).toBeTruthy();

    expect( img.classes('hidden-pokemon') ).toBe(false);
    expect( img.classes('fade-in') ).toBe(true);

  });
})