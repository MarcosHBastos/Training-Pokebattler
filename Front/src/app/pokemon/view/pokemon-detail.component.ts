import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }

}
