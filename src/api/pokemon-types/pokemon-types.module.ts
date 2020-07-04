import { Module } from "@nestjs/common";
import { PokemonTypesController } from "./pokemon-types.controller";
import { PokemonTypesService } from "./pokemon-types.service";

@Module({
  controllers: [PokemonTypesController],
  providers: [PokemonTypesService],
})
export class PokemonTypesModule {}
