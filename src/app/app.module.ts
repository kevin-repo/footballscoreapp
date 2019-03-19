import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { CompetitionService } from './shared/services/competition.service';
import { MatchListComponent } from './components/match-list/match-list.component';
import { FootballDataInterceptor } from './core/football-data-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FootballDataInterceptor, multi: true },
    CompetitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
