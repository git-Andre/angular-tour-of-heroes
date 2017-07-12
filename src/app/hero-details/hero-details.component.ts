import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroesService } from '../services/heroes.service';

@Component({
               selector   : 'app-hero-details',
               templateUrl: './hero-details.component.html',
               styleUrls  : ['./hero-details.component.css'],
           })

export class HeroDetailsComponent implements OnInit {
    hero: Hero;

    constructor(private heroesService: HeroesService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.heroesService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroesService.update(this.hero)
        .then(() => this.goBack());
    }
}
