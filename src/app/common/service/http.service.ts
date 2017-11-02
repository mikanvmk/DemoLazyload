import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request, RequestMethod, ResponseContentType} from '@angular/http';
import {FileSaverService} from 'ngx-filesaver';
import {Constant} from "../constant";
import {DataService} from "./data.service";
import {Observable} from "rxjs/Observable";
import "rxjs";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpService {

  constructor(private http: Http,
              private dataService: DataService,
              private user:UserService,
              private router:Router,
              private _FileSaverService: FileSaverService) {}

  get(url):Observable<any> {
    let language = this.dataService.currentLang ? this.dataService.currentLang.substring(0, 2) : 'en';
    //Config headers
    const headers = new Headers();

    //add header token when login
    let token = this.dataService.token;
    if (token) {
      headers.append('Authorization', '' + token);
    }

    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', language);
    headers.append(Constant.header_config_code, "requestId=" + Date.now());
    const requestOptions = new RequestOptions({
      method: 'GET',
      url: Constant.url_host + url,
      headers: headers,
      withCredentials: true
    });

    //Call API request
    return this.http.request(new Request(requestOptions))
    /**
     * function when response success
     * @params res : Response
     * return Object
     * */
      .map((res: Response) => {
        let token = res.headers.get('Authorization');
        if (token) {
          token = 'Bearer ' + token;
          this.dataService.token = token;
          localStorage.setItem(Constant.key_local_token, token)
        }
        let json = res.json();
        if (json.extra) {
          let clientVersion = localStorage.getItem(Constant.key_local_version);
          if (!clientVersion || clientVersion !== json.extra.clientVersion) {
            localStorage.setItem(Constant.key_local_version, json.extra.clientVersion);
            if (clientVersion) location.reload()
          }
        }

        return json;
      })

      /**
       * function handle when response fail
       * @params error : Response
       * */
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  dowloadFile(url): Observable<any> {
    let language = this.dataService.currentLang ? this.dataService.currentLang.substring(0, 2) : 'en';
    //Config headers
    const headers = new Headers();

    //add header token when login
    let token = this.dataService.token;
    if (token) {
      headers.append('Authorization', '' + token);
    }

    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', language);
    headers.append(Constant.header_config_code, "requestId=" + Date.now());
    const requestOptions = new RequestOptions({
      method: 'GET',
      url: Constant.url_host + url,
      headers: headers,
      responseType: ResponseContentType.Blob,
      withCredentials: true
    });

    //Call API request
    return this.http.request(new Request(requestOptions))
    /**
     * function when response success
     * @params res : Response
     * return Object
     * */
      .map((res: Response) => {
        let token = res.headers.get('Authorization');
        if (token) {
          token = 'Bearer ' + token;
          this.dataService.token = token;
          localStorage.setItem(Constant.key_local_token, token)
        }
        res.headers.toJSON();
        this._FileSaverService.save((<any>res)._body, res.headers.get('Filename'));
      })
      /**
       * function handle when response fail
       * @params error : Response
       * */
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  /**
   * function post
   * @params url : string
   * @params data : Object
   * */
  post(url, data): Observable<any> {

    let language = this.dataService.currentLang ? this.dataService.currentLang.substring(0, 2) : 'en';

    //Config headers
    const headers = new Headers();

    //add header token when login
    let token = this.dataService.token;
    if (token) {
      headers.set('Authorization', token + '');
    }

    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', language);
    headers.append(Constant.header_config_code, "requestId=" + Date.now());
    const requestoptions = new RequestOptions({
      method: 'POST',
      url: Constant.url_host + url,
      headers: headers,
      body: data,
      withCredentials: true
    });

    //Call API request
    return this.http.request(new Request(requestoptions))
    /**
     * function when response success
     * @params res : Response
     * return Object
     * */
      .map((res: Response) => {
        let token = res.headers.get('Authorization');
        if (token) {
          token = 'Bearer ' + token;
          this.dataService.token = token;
          localStorage.setItem(Constant.key_local_token, token)
        }
        let json = res.json();
        if (json.extra) {
          let clientVersion = localStorage.getItem(Constant.key_local_version);
          if (!clientVersion || clientVersion !== json.extra.clientVersion) {
            localStorage.setItem(Constant.key_local_version, json.extra.clientVersion);
            if (clientVersion) location.reload()
          }
        }

        return json;
      })

      /**
       * function handle when response fail
       * @params error : Response
       * */
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  delete(url, data) {

    let language = this.dataService.currentLang ? this.dataService.currentLang.substring(0, 2) : 'en';
    //Config headers
    // const params: URLSearchParams = this.serialize(data);
    const headers = new Headers();

    //add header token when login
    let token = this.dataService.token;
    if (token) {
      headers.set('Authorization', token + '');
    }

    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', language);
    headers.append(Constant.header_config_code, "requestId=" + Date.now());
    const requestoptions = new RequestOptions({
      method: RequestMethod.Delete,
      url: Constant.url_host + url + data,
      headers: headers,
      withCredentials: true
    });

    //Call API request
    return this.http.request(new Request(requestoptions))
    /**
     * function when response success
     * @params res : Response
     * return Object
     * */
      .map((res: Response) => {
        let token = res.headers.get('Authorization');
        if (token) {
          token = 'Bearer ' + token;
          this.dataService.token = token;
          localStorage.setItem(Constant.key_local_token, token);
        }
        let json = res.json();
        if (json.extra) {
          let clientVersion = localStorage.getItem(Constant.key_local_version);
          if (!clientVersion || clientVersion !== json.extra.clientVersion) {
            localStorage.setItem(Constant.key_local_version, json.extra.clientVersion);
            if (clientVersion) location.reload()
          }
        }

        return json;
      })

      /**
       * function handle when response fail
       * @params error : Response
       * */
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  handleError(error) {
    if (!navigator.onLine) {
      return Observable.throw(error.json())
    }else {
      if (error.status === Constant.error_force_logout || error.status === Constant.error_not_connect_server){
        return Observable.throw({status:null})
      }else {
        return Observable.throw(error.json())
      }
    }
  }

  // logout
  logout() {
    this.post(Constant.api_user_sign_out, {})
      .subscribe( (res)=> {
        if (res.status === Constant.success_code) {
          this.goToLogin();
        }
      },error=>{
        this.goToLogin();
      });
  }

  goToLogin() {
    //Remove token when logout success
    this.dataService.token = null;
    this.user.userType = null;
   setTimeout(()=>{
     let version = localStorage.getItem(Constant.key_local_version);
     sessionStorage.clear();
     localStorage.clear();
     localStorage.setItem(Constant.key_local_language,this.dataService.currentLang);
     localStorage.setItem(Constant.key_local_version,version);
   },Constant.const_timeout_default);

    //Go to screen login
    this.router.navigate([Constant.url_login]);
  };
}
