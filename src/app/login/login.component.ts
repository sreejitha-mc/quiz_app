import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsService } from '../services/logins.service';
import { User } from '../model/user.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    message: boolean;
    user = {} as User;

    constructor(
        private router: Router,
        private loginsService: LoginsService
    ) { }

    ngOnInit(): void {
    }

    navigateToOption(): void {

        this.loginsService.getLogin().subscribe(
            (data) => {

                const login = data.find((i) => this.user.username === i.username && this.user.password === i.password
                );
                if (login) {
                    this.router.navigate([`/option-selection`]);
                }
                else {
                    this.message = true;
                }
            },
            (err) => {
                console.log(err);

            }
        );
    }
}
