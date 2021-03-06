import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-details/hero';
import { HeroesService } from '../services/heroes.service';

@Component({
               selector   : 'app-dashboard',
               templateUrl: './dashboard.component.html',
               styleUrls  : ['./dashboard.component.css'],
           })
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroesService: HeroesService) {
    }

    ngOnInit(): void {
        this.heroesService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }

}
