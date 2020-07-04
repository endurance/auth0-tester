import { Injectable } from '@nestjs/common';
const Pokedex = require('pokedex-promise-v2');

@Injectable()
export class PokemonTypesService {
  public async allTypes() {
    const pokedex = new Pokedex();
    const types = await pokedex.getTypesList();
    return types;
  }
}
