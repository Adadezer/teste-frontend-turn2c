import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, SimpleChanges } from '@angular/core';

import { switchMap } from 'rxjs';
import { IDogs } from './interfaces/IDogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  public allDogs: IDogs[] = [];
  public dogs: IDogs[] = [];
  public totalPages: number = 0;
  public currentPage: number = 0;
  public limit: number= 10
  private readonly API = 'https://api.thedogapi.com/v1/breeds';

  @Input() breeds: string[] = [];

  constructor(
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.loadDogs();
    this.loadAllDogs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['breeds'] && !changes['breeds'].isFirstChange()) {
      console.log('Mudanças detectadas em breeds:', this.breeds);
    }
  }

  loadBreeds() {
    this.allDogs.forEach((el) => {
      if (
        !this.breeds.includes(el.breed_group)
        && el.breed_group !== undefined
        && el.breed_group.length > 0
      ) {
        this.breeds.push(el.breed_group);
      }
    });
    // console.log(this.breeds)
  }

  loadDogs() {
    this.http.get(this.API+`?limit=${this.limit}&page=${this.currentPage}`).pipe(
      switchMap((data: any) => {
        this.dogs = data;
        // this.filterDogs();
        return [];
      })
    ).subscribe();
  }

  loadAllDogs() {
    this.http.get(this.API).pipe(
      switchMap((data: any) => {
        this.allDogs = data;
        this.loadBreeds();
        return [];
      })
    ).subscribe();
  }

  filterDogs () {
    console.log(this.breeds)
    // this.dogs = this.allDogs.filter((dog) => {dog.breed_group === this.breeds});
  }

  nextPage(): void {
    this.currentPage++
    this.loadDogs();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadDogs();
    }
  }
}
