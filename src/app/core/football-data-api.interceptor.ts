import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ProtectedSettings } from '../protected/protectedsettings';
import { tap } from 'rxjs/operators';

@Injectable()
export class FootballDataInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq = req.clone({
      headers: req.headers.set('X-Auth-Token', ProtectedSettings.tokenApi)
    });

    return next.handle(apiReq).pipe(tap(() => {}, (error) => {
      console.log('Error in football-data api');
    }));

  }

}
