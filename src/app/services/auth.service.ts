import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  private userObs = new BehaviorSubject<Array<User>>([]);

  readonly baseUrl = 'http://127.0.0.1:8000/api/';

  private email = 'test@test.pl';
  private password = 'haslo';

  constructor(private http: HttpClient) {
    this.login(this.email, this.password);
  }

  login(email: string, password: string) {
    const body = { email: email, password: password };
    this.http.post<Array<User>>(this.baseUrl + 'login', body, {responseType: 'json'})
      .subscribe((data: User[]) => {
        this.userObs.next(data);
      });
  }

  getAuthUser(): Observable<Array<User>> {
    return this.userObs.asObservable();
  }







}
