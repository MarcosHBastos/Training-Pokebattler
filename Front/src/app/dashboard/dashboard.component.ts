import { Component, OnInit } from '@angular/core';

import { Trainer } from '../models/trainer';
import { TrainerService } from '../services/trainer.service';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from  '../services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trainers: Trainer[] = [];
  pokemons: Pokemon[] = [];

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    //this.getTrainers();
    this.getPokemons();
  }

  getTrainers(): void {
    this.trainerService.getTrainers()
        .subscribe(trainers => this.trainers = trainers.slice(1, 5));
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
  }

}
