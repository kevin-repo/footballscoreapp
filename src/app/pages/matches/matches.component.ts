import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { Match } from 'src/app/shared/model/match';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(private competitionService: CompetitionService) { }

  // TODO Create match-list component.

  ngOnInit() {
    // Get all match of competition.
    this.competitionService.getMatches('FL1', '29').subscribe(
      (data) => {
        this.matches = data;
      },
      (error) => console.log(error)
    );
  }

}
