import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { Match } from 'src/app/shared/model/match';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/shared/model/competition';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  currentMatchDay: number;
  matches: Match[];
  competition$: Observable<Competition>;
  matches$: Observable<Match[]>;

  selectedValue: string;
  selectedMatchday: number;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competition$ = this.competitionService.getCompetition('FL1');
    this.updateMatchList(30);
    // TODO Put currentMatchday in default value for select field.
  }

  updateMatchList(selectedMatchday: number) {
    this.matches$ = this.competitionService.getMatches('FL1', selectedMatchday);
  }

  getCompetition() {
    // Get current match day.
    this.competitionService.getCompetition('FL1').subscribe(
      (data) => {
        this.currentMatchDay = data.currentSeason.currentMatchday;
      },
      (error) => console.log(error)
    );
  }

  getMatches() {
    // Get all match of competition.
    console.log(this.currentMatchDay);
    this.competitionService.getMatches('FL1', this.currentMatchDay).subscribe(
      (data) => {
        this.matches = data;
      },
      (error) => console.log(error)
    );
  }

  selected(event) {
    const target = event.source.selected._element.nativeElement;
    const selectedMatchday = event.value;
    this.updateMatchList(selectedMatchday);
  }

}
