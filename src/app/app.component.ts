import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <img class="pokemon" [src]="pokemon?.sprites.front_default" alt="{{ pokemon?.name }} image" *ngIf="pokemon">
    <h1>Name: {{ pokemon?.name }}</h1>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  pokemon: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(
      (data: any) => {
        this.pokemon = data;
      },
      (error) => {
        console.error('Error fetching Pokemon:', error);
      }
    );
  }
}
