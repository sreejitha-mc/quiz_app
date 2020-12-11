import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsService } from '../services/logins.service';
import { AppDataService } from '../services/app-data.service';
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
        private loginsService: LoginsService,
        private appDataService: AppDataService
    ) { }

    ngOnInit(): void {
    }

    navigateToOption(): void {

        this.loginsService.validateLogins(this.user).subscribe(
            (res) => {
                if (res) {
                    this.appDataService.setUserInfo(res);
                    this.router.navigate([`/option-selection`]);
                } else {
                    this.message = true;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
