import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';
import { AuthToken } from '@core/models/auth.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { BroadcasterService } from './broadcaster.service';
import { CONSTANTS } from './constants';

@Injectable()
export class HTTPReqResInterceptor implements HttpInterceptor {
  isalreadyRefreshing: boolean = false;
  private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    @Inject('BASE_URL') private _baseUrl: string,
    private _broadcaster: BroadcasterService,
    private _authservice: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, true);
    const newReq = req.clone({
      url: this._baseUrl + req.url,
      headers: req.headers.set('custom_header', 'value'),
    });

    return next.handle(newReq).pipe(
      tap((e) => {
        if (e instanceof HttpResponse) {
          this.handleSuccess(e.body);
        }
      }),
      catchError((err) => this.handleError(newReq, next, err)),
      finalize(() => {
        this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, false);
      })
    );
  }

  handleError(newRequest: HttpRequest<any>, next: HttpHandler, err: any) {
    if (err instanceof HttpErrorResponse && err.status === 401) {
      return this.handle401(newRequest, next);
    } else {
      this._broadcaster.broadcast(CONSTANTS.ERROR, {
        error: 'Something went wrong',
        timeout: 5000,
      });
    }
    return throwError(err);
  }

  handleSuccess(body: any) {
    /* handle success actions here */
  }

  addToken(request: HttpRequest<any>, newToken: AuthToken) {
    return request.clone({
      headers: request.headers.set(CONSTANTS.AUTH_HEADER, `Bearer ${newToken.access_token}`),
    });
  }

  /* Refresh handler referred from https://www.intertech.com/angular-4-tutorial-handling-refresh-token-with-new-httpinterceptor/ */
  handle401(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isalreadyRefreshing) {
      //  don't want to have multiple refresh request when multiple unauthorized requests
      this.isalreadyRefreshing = true;
      // so that new subscribers don't trigger switchmap part and stay in queue till new token received
      this.tokenSubject.next(null);
      return this._authservice.refreshToken().pipe(
        switchMap((newToken: AuthToken) => {
          if (newToken) {
            // update token store & publish new token, yay!!
            this._authservice.storeToken(newToken);
            this.tokenSubject.next(newToken);
            return next.handle(this.addToken(request, newToken));
          }
          // no new token received | something messed up
          this._authservice.logout();
          return throwError('no refresh token found');
        }),
        catchError((error) => {
          this._authservice.logout();
          return throwError(error);
        }),
        finalize(() => (this.isalreadyRefreshing = false))
      );
    } else {
      /* if tab is kept running and this isalreadyRefreshing is still true, 
      user clicks another menu, req initiated but refresh failed */
      if (this.isalreadyRefreshing && request.url.includes('refresh')) {
        this._authservice.logout();
      }
      // new token ready subscribe -> every skipped request will be retried with fresh token
      return this.tokenSubject.pipe(
        filter((token: AuthToken) => token != null),
        take(1), // complete the stream
        switchMap((token: AuthToken) => {
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }
}
