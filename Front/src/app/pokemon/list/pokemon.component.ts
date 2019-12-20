import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
  }

  delete(id: number): void {
    this.pokemonService.delete(id)
        .subscribe(() => this.getPokemons());
    console.log("Pokemon deleted");
  }

}
