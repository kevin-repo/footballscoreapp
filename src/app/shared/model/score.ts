import { MatchTime } from './matchtime';

export interface Score {
    winner: string;
    duration: string; // TODO Export to Enum
    fullTime: MatchTime;
    haflTime: MatchTime;
    extraTime: MatchTime;
    penalties: MatchTime;
}