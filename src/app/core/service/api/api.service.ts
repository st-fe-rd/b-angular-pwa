import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { takeUntil, map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

const apiBaseUrl = `${environment.apiBaseUrl}/api`;

// TODO: refactor this api service
export interface MultipleReq {
  uri: Array<any> | any;
  body?: any;
  method: string | any; // RequestMethod is outdated
  options?: any; // RequestOptionsArgs is outdated
}

export interface ErrorMsg {
  status: number;
  errors: Array<any> | any;
  success: boolean;
}

export const VERSION_LIST = {
  v1: 'v1',
};

export const VERSION = VERSION_LIST.v1;

export const ENDPOINT = {
  sessions: 'sessions',
  login: 'sessions/login',
  signin: 'auth/sign_in',
  checkLogin: 'auth/validate_token',
  me: 'users/me'
};

@Injectable()
export class ApiService {

  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Perform GET HTTP method
   * @method get
   * @param  {Array<any> | any}     uri     Describe API endpoint by mixed array
   *                                        or a string or single number
   * @param  {RequestOptionsArgs}   options Additional setting for API call
   * @return {Observable<Response>}         Response data and/or error message
   */
  public get(uri: Array<any> | any, queryOptions?: object): Observable<ArrayBuffer> {
    const [url, queryParams] = this._constructRequest(uri, queryOptions);
    const request = this.http.get(url, queryParams);
    return this._connect(request);
  }

  /**
   * Perform POST HTTP method
   * @method post
   * @param  {Array<any> | any}     uri     Describe API endpoint by mixed array
   *                                        or a string or single number
   * @param  {any}                  body    Data to send, form data and/or file
   * @param  {RequestOptionsArgs}   options Additional setting for API call
   * @return {Observable<Response>}         Response data and/or error message
   */
  public post(uri: Array<any> | any, body: any, queryOptions?: object, fullRes = false): Observable<ArrayBuffer> {
    const [url, queryParams] = this._constructRequest(uri, queryOptions, fullRes);
    const request = this.http.post(url, body, queryParams);
    return this._connect(request);
  }

  /**
   * Perform POST HTTP method
   * @method postFormData
   * @param  {Array<any> | any}     uri     Describe API endpoint by mixed array
   *                                        or a string or single number
   * @param  {any}                  body    Data to send, form data and/or file
   * @param  {RequestOptionsArgs}   options Additional setting for API call
   * @return {Observable<Response>}         Response data and/or error message
   */
  public postFormData(uri: Array<any> | any, body: any, queryOptions?: object): Observable<ArrayBuffer> {
    const [url, queryParams] = this._constructRequest(uri, queryOptions);
    const form = this._form(body);
    const request = this.http.post(url, form).pipe(takeUntil(this.ngUnsubscribe));
    return this._connect(request);
  }

  /**
   * Perform PUT HTTP method
   * @method put
   * @param  {Array<any> | any}     uri     Describe API endpoint by mixed array
   *                                        or a string or single number
   * @param  {any}                  body    Data to send, form data and/or file
   * @param  {RequestOptionsArgs}   options Additional setting for API call
   * @return {Observable<Response>}         Response data and/or error message
   */
  // public put(uri: Array<any> | any, body: any, queryOptions?: Object): Observable<Response> {
  //   let [url, queryParams] = this._constructRequest(uri, queryOptions);
  //   let request = this.http.put(url, body, queryParams);
  //   return this._connect(request);
  // }

   /**
    * Perform DELETE HTTP method
    * @method delete
    * @param  {Array<any> | any}     uri     Describe API endpoint by mixed array
    *                                        or a string or single number
    * @param  {RequestOptionsArgs}   options Additional setting for API call
    * @return {Observable<Response>}         Response data and/or error message
    */
  public delete(uri: Array<any> | any, queryOptions?: object): Observable<ArrayBuffer> {
    const [url, queryParams] = this._constructRequest(uri, queryOptions);
    const request = this.http.delete(url, queryParams);
    return this._connect(request);
  }

  private _constructRequest(uri: Array<any> | any, moreOptions?: object | any, fullRes?: boolean): any {
    const url = Array.prototype.concat(apiBaseUrl, uri).join(String.fromCharCode(47));
    const paramsRequest = {};
    if (moreOptions) {
      Object.keys(moreOptions).forEach(x => {
        paramsRequest[`${x}`] = `${moreOptions[x]}`;
      });
    }
    return fullRes ? [url, { params: paramsRequest, observe: 'response' }] : [url, { params: paramsRequest }];
  }

  private _connect(request: any): Observable<ArrayBuffer> {
    return request.pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return this._handleError(err);
      })
    );
  }

  /**
   * Helper method for hook up Error handler helper
   * @method _handleError
   * @param {any} err : Error information from failed request
   */
  private _handleError(err: any) {
    let body: ErrorMsg;
    // token changed
    if (err.status === 401) {
      // this.auth.logout();
    }
    body = {
      status: err.status,
      errors: err.error.errors,
      success: err.error.success
    };
    // server error - API not responsed
    // Always give back the error for subscriber.
    return throwError(body);
  }

  private _form(data: any = {}): any {
    const form = new FormData();

    for (const param in data) {
      if (data.hasOwnProperty(param)) {
        if (data[param] === 'image') {
          form.append(param, data[param], 'thumb.jpg');
        } else {
          form.append(param, data[param]);
        }
      }
    }
    return form;
    // return this.auth.getToken().map((token: string) => {
    //   form.append('sessionid', token || '');
    //     return form;
    //   }).toPromise();
  }
}

/**
 * Export wrapper for `ApiService` and its dependencies
 * @type {any}
 */
export const API_PROVIDERS: any = [
  ApiService
];
