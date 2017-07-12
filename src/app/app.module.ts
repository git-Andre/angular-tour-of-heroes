import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HeroesService } from 'app/services/heroes.service';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
              imports     : [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRoutingModule,
              ],
              declarations: [
                  AppComponent,
                  HeroDetailsComponent,
                  HeroesComponent,
                  DashboardComponent,
                  HeroSearchComponent,
              ],
              providers   : [HeroesService],
              bootstrap   : [AppComponent],
          })
export class AppModule {
}
