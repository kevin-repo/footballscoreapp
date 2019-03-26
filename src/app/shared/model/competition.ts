import { Season } from './season';
import { Area } from './area';

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    emblemUrl: string;
    plan: string;
    currentSeason: Season;
    seasons: Season[];
    lastUpdated: Date;
}
