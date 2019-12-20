import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainerComponent } from './trainer/list/trainer.component';
import { PokemonComponent } from './pokemon/list/pokemon.component';
import { TrainerDetailComponent } from './trainer/view/trainer-detail.component';
import { PokemonDetailComponent } from './pokemon/view/pokemon-detail.component';
import { PokemonAddComponent } from './pokemon/new/pokemon-add.component';
import { TrainerAddComponent } from './trainer/new/trainer-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trainers', component: TrainerComponent },
  { path: 'trainerdetail/:id', component: TrainerDetailComponent },
  { path: 'traineradd', component: TrainerAddComponent },
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemondetail/:id', component: PokemonDetailComponent },
  { path: 'pokemonadd', component: PokemonAddComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
