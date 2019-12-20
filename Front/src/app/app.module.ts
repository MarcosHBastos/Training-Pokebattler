import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/list/pokemon.component';
import { TrainerComponent } from './trainer/list/trainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainerDetailComponent } from './trainer/view/trainer-detail.component';
import { PokemonDetailComponent } from './pokemon/view/pokemon-detail.component';
import { TrainerAddComponent } from './trainer/new/trainer-add.component';
import { PokemonAddComponent } from './pokemon/new/pokemon-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TrainerComponent,
    DashboardComponent,
    TrainerDetailComponent,
    PokemonDetailComponent,
    TrainerAddComponent,
    PokemonAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
