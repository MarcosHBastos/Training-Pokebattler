/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wipro.pokemon.repository;

import com.wipro.pokemon.entity.Trainer;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author MA40044537
 */
public interface TrainerRepository extends CrudRepository<Trainer, Long> {
}
