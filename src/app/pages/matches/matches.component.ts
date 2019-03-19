import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { Match } from 'src/app/shared/model/match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(private competitionService: CompetitionService) { }

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
