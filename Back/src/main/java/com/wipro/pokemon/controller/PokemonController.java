/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wipro.pokemon.controller;

import com.wipro.pokemon.entity.Pokemon;
import com.wipro.pokemon.service.PokemonService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author MA40044537
 */
@CrossOrigin
@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping
    public Iterable<Pokemon> getAll() {
        return pokemonService.getAll();
        //return getPokemons();
    }

    @GetMapping("/{id}")
    public Pokemon getById(@PathVariable Long id) {
        return pokemonService.getById(id);
        //return getPokemons().get(0);
    }

    @PostMapping
    public Pokemon createPokemon(@RequestBody Pokemon pokemon) {
        return pokemonService.createPokemon(pokemon);
        //pokemon.setId(Long.valueOf(pokemons.size()+1));
        //pokemons.add(pokemon);
        //return pokemon;
    }

    @DeleteMapping("/{id}")
    public void deletePokemon(@PathVariable Long id) {
        pokemonService.deletePokemon(id);
    }

    @PutMapping
    public void updatePokemon(@RequestBody Pokemon pokemon) {
        pokemonService.updatePokemon(pokemon);
    }

    //@GetMapping
    //public Iterable<Pokemon> getAll() {
        /*List<Pokemon> heroes = new ArrayList<>();
     Pokemon a = new Pokemon();
     a.setId(Long.parseLong("1"));
     a.setName("José");
     Pokemon b = new Pokemon();
     b.setId(Long.parseLong("2"));
     b.setName("Maria");
     heroes.add(a);
     heroes.add(b);
     return heroes;*/
    //   return pokemonService.getAll();
    //}
}
