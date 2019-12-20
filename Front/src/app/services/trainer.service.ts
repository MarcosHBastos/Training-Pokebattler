import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainersUrl = 'http://localhost:8080/trainer';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainersUrl);
  }

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.trainersUrl + `/${id}`);
  }

  addTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(this.trainersUrl, trainer, this.httpOptions);
  }

  deleteTrainer(id: number): Observable<Trainer> {
    return this.http.delete<Trainer>(this.trainersUrl + `/${id}`);
  }

}
