import { Module } from '@nestjs/common';
import { PokemonTypesModule } from "./api/pokemon-types/pokemon-types.module";
import { IndividualPokemonModule } from "./api/individual-pokemon/individual-pokemon.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    AuthModule,
    PokemonTypesModule,
    IndividualPokemonModule
  ],
})
export class AppModule {}
