import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Location } from '@angular/common'

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit {

  pokemon = FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder,
    private location: Location
    ) { }

  ngOnInit() {
    this.pokemon = this.fb.group({
      name: ['', Validators.required],
      move: this.fb.group({
        name: [''],
        damage: [''],
        type: ['']
      })
    });
  }

  onSubmit({ value, valid }: { value: Pokemon, valid: boolean} ) {
    if(valid) {
      this.pokemonService.addPokemon(value)
          .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
