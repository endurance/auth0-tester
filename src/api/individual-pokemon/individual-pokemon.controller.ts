import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
const Pokedex = require('pokedex-promise-v2');


@Controller('/individual-pokemon')
export class IndividualPokemonController {
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  public async getIndividualPokemon(@Param() params){
    const pokedex = new Pokedex();
    const pokemon = await pokedex.getPokemonByName(params.id)
    return pokemon;
  }

}
