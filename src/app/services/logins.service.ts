import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
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

    validateLogins(userInput: User): Observable<any> {
        const loginSubject = new Subject<any>();
        this.getLogin().subscribe(
            (data) => {
                const user = data.find(u => u.username === userInput.username && u.password === userInput.password);
                return user ? loginSubject.next(user) : loginSubject.next(false);
            }
        );
        return loginSubject.asObservable();
    }

}
