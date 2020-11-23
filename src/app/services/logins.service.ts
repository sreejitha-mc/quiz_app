import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginsService {

    loginUrl = '/assets/data/logins.json';

    constructor(private http: HttpClient) { }

    getLogin(): Observable<User[]> {
        return this.http.get<User[]>(this.loginUrl);
    }

}
