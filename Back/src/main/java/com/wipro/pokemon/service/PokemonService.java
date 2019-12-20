/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wipro.pokemon.service;

import com.wipro.pokemon.entity.Pokemon;
import com.wipro.pokemon.repository.PokemonRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MA40044537
 */
@Service
public class PokemonService {
    
    @Autowired
    private PokemonRepository pokemonRepository;
    
     public Iterable<Pokemon> getAll() {
        return pokemonRepository.findAll();
    }

    public Pokemon createPokemon(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    public Pokemon getById(Long id) {
        Optional<Pokemon> optionalpokemon = pokemonRepository.findById(id);
        return optionalpokemon.orElseThrow(() -> new RuntimeException("Pokemon doesnt exists"));
    }

    public void deletePokemon(Long id) {
        pokemonRepository.deleteById(id);
    }

    public void updatePokemon(Pokemon pokemon) {
        pokemonRepository.save(pokemon);
    }
}
