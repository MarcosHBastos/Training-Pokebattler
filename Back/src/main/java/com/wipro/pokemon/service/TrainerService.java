/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wipro.pokemon.service;

import com.wipro.pokemon.entity.Trainer;
import com.wipro.pokemon.repository.TrainerRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MA40044537
 */
@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    public Iterable<Trainer> getAll() {
        return trainerRepository.findAll();
    }

    public Trainer createTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    public Trainer getById(Long id) {
        Optional<Trainer> optionalTrainer = trainerRepository.findById(id);
        return optionalTrainer.orElseThrow(() -> new RuntimeException("Treinador não existe vacilão :p"));
    }

    public void deleteTrainer(Long id) {
        trainerRepository.deleteById(id);
    }

    public void updateTrainer(Trainer trainer) {
        trainerRepository.save(trainer);
    }
}
