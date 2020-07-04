import { Module } from "@nestjs/common";
import { IndividualPokemonController } from "./individual-pokemon.controller";

@Module({
  controllers: [IndividualPokemonController]
})
export class IndividualPokemonModule {}
