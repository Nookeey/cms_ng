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

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllPages(): Observable<Array<Page>> {
    const url = this.BASE_URL + 'key/' + this.API_KEY;
    return this.http.get<Array<Page>>(url, {responseType: 'json'});
  }

  setPagesObs() {
    this.getAllPages().subscribe(e => {
      this.pagesObs.next(e);
    });
  }

  getPagesObs(): Observable<Array<Page>> {
    try {
      this.setPagesObs();
    } catch (error) {
      console.log(error);
    }
    return this.pagesObs.asObservable();
  }

  getPage(id: string): Observable<Page> {
    const url = this.BASE_URL + id + '/key/' + this.API_KEY;
    return this.http.get<Page>(url, {responseType: 'json'});
  }

  setPageVisible(page: Page) {
    const url = this.BASE_URL + page.id + '/set-visible/key/' + this.API_KEY;
    this.http.put(url, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
      });
  }

  setPageInvisible(page: Page) {
    const url = this.BASE_URL + page.id + '/set-invisible/key/' + this.API_KEY;
    this.http.put(url, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
      });
  }

  updatePageContent(page: Page) {
    const url = this.BASE_URL + page.id + '/update-content/key/' + this.API_KEY;
    const body = {content: page.content};
    this.http.post(url, body, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
      });
  }

  createNewPage(page: Page) {
    const url = this.BASE_URL + 'add/key/' + this.API_KEY;
    const body = { name: page.name, slug: page.slug };
    this.http.post(url, body, {responseType: 'json'})
      .subscribe(e => {
        console.log(e);
        this.setPagesObs();
      });
  }

  deletePage(page: Page) {
    const pages = this.pagesObs.getValue().filter(e => e !== page);
    this.pagesObs.next(pages);
    const url = this.BASE_URL + page.id + '/delete/key/' + this.API_KEY;
    this.http.delete(url)
      .subscribe(e => {
        console.log(e);
      });
  }

}

