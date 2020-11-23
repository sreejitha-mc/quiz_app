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

    /* validateLogins(): Observable<boolean> {
        this.getLogin().subscribe(
            (data) => {
                const username = 'admin';
                const pass = 'admin';
                const user = data.find(u => u.username === username && u.password === pass);
                return user ? of(true) : of(false);
            },
            (err) => {
                console.log(err);
                return of(false);
            }
        );
    }
 */
}
