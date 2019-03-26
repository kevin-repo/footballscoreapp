import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Material import.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { CompetitionService } from './shared/services/competition.service';
import { MatchListComponent } from './components/match-list/match-list.component';
import { FootballDataInterceptor } from './core/football-data-api.interceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FootballDataInterceptor, multi: true },
    CompetitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
