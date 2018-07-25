import { environment } from './../../environments/environment.prod';
import { AuthService } from './auth.service';
import { Page } from './../models/page';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PagesService {

  private API_KEY = environment.apiKey;
  private BASE_URL = environment.apiUrl + 'pages/';

  private pagesObs = new BehaviorSubject<Array<Page>>([]);

  constructor(private http: HttpClient, private authService: AuthService) {

    this.getAllPages().subscribe(e => {
      console.log(e);
    });
    // this.getPage(15).subscribe(e => {
    //   console.log(e);
    // });
    // this.setPageVisible(15);
    // this.setPageInvisible(15);

  }


  getAllPages(): Observable<Array<Page>> {
    const url = this.BASE_URL + 'key/' + this.API_KEY;
    return this.http.get<Array<Page>>(url, {responseType: 'json'});
  }

  getPage(id: number): Observable<Page> {
    const url = this.BASE_URL + id + '/key/' + this.API_KEY;
    return this.http.get<Page>(url, {responseType: 'json'});
  }

  setPageVisible(id: number) {
    const url = this.BASE_URL + id + '/set-visible/key/' + this.API_KEY;
    this.http.put(url, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
      });
  }

  setPageInvisible(id: number) {
    const url = this.BASE_URL + id + '/set-invisible/key/' + this.API_KEY;
    this.http.put(url, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
      });
  }


}

