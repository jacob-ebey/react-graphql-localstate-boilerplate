import { Pokemon } from "../../types";

import { PokemonImage } from './types';

export default {
  Pokemon: {
    images({ pokedexNumber, name }: Partial<Pokemon>): PokemonImage {
      let parsedName = (name && name.english && name.english.trim().replace(/é/g, 'e').replace(/'/g, '').replace(/[^A-z\d-]/g, '_').replace(/[_]+/g, '_').replace(/[_]+$/g, '')) || undefined;
      let number = (pokedexNumber && pokedexNumber.toString()) || undefined;

      if (number && number.length < 3) {
        number = Array(3 - number.length).fill('0').join('') + number;
      }

      return {
        full: number && parsedName && `https://github.com/jacob-ebey/pokemon.json/raw/master/images/${number}${parsedName}.png`,
        sprite: number && `https://github.com/jacob-ebey/pokemon.json/raw/master/sprites/${number}MS.png`,
        thumbnail: number && parsedName && `https://github.com/jacob-ebey/pokemon.json/raw/master/thumbnails/${number}${parsedName}.png`,
        __typename: 'PokemonImage'
      };
    }
  }
}
