import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';

import { Trainer } from '../../models/trainer';
import { TrainerService } from '../../services/trainer.service';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-trainer-add',
  templateUrl: './trainer-add.component.html',
  styleUrls: ['./trainer-add.component.css']
})
export class TrainerAddComponent implements OnInit {

  trainer = FormGroup;
  pokemons: Pokemon[];

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private fb: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit() {
    this.trainer = this.fb.group({
      name: ['', Validators.required],
      pokemons: ['']
    });
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
  }

  onSubmit({ value, valid }: { value: Trainer, valid: boolean} ) {
    if(valid) {
      this.trainerService.addTrainer(value)
          .subscribe(() => this.goBack());
    }
    console.log(value);
  }

  goBack(): void {
    this.location.back();
  }

}
