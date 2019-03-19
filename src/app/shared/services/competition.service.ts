import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Match } from '../model/match';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private readonly URL_COMPETITION: string = 'competitions';

  constructor(private http: HttpClient) { }

  /**
   * Get matches corresponding to competition and match day
   * @param competitionCode : Code of competition
   * @param matchDay : number of match day
   */
  getMatches(competitionCode: string, matchDay: string): Observable<Match[]> {
    const url = `${environment.apiBaseUrl}/${this.URL_COMPETITION}/${competitionCode}/matches`;
    const requestOptions: Object = {
      responseType: 'json',
      observe: 'body',
      params: new HttpParams().set('matchday', matchDay)
    };

    return this.http.get<Match[]>(url, requestOptions).pipe(
      map(data => {
        return data['matches'];
      })
    );
  }

}
