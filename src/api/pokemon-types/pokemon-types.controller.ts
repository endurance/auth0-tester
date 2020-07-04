import { Controller, Get } from '@nestjs/common';
import { PokemonTypesService } from './pokemon-types.service';

@Controller('/pokemon-types')
export class PokemonTypesController {
  constructor(private readonly _service: PokemonTypesService) {}

  @Get('/')
  public async getPokemonTypes() {
    return await this._service.allTypes();
  }
}
