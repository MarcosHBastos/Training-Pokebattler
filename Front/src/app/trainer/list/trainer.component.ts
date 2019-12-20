import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  trainers: Trainer[];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.getTrainers();
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.trainerService.addTrainer({ name } as Trainer)
        .subscribe(trainer => {
          this.trainers.push(trainer);
        })
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getTrainers()
        .subscribe(trainers => this.trainers = trainers);
  }

  delete(id: number): void {
  }

}
