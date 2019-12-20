import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'http://localhost:8080/pokemon';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'} )
  };

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonsUrl + `/${id}`);
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    console.log(pokemon);
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, this.httpOptions);
  }

  delete(id: number): Observable<Pokemon> {
    return this.http.delete<Pokemon>(this.pokemonsUrl + `/${id}`);
  }

}
