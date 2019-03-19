import { Score } from './score';
import { Team } from './team';
import { Referee } from './referee';

export interface Match {
    id: number;
    utcDate: Date;
    status: string; // TODO Export to Enum
    matchday: number;
    stage: string; // TODO Export to Enum
    group: string; // TODO Export to Enum
    lastUpdated: Date;
    videoSrc: string;
    score: Score;
    homeTeam: Team;
    awayTeam: Team;
    referees: Referee[];
}
