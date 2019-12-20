import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { Location } from '@angular/common';

import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {

  trainer: Trainer;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTrainer();
  }

  getTrainer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.getTrainer(id)
      .subscribe(trainer => this.trainer = trainer);
      console.log(this.trainer);
  }

  goBack(): void {
    this.location.back();
  }

}
