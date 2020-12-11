import { Component, OnInit } from '@angular/core';
import { AppDataService } from './services/app-data.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'quiz-app';

    constructor(
        private appDataService: AppDataService,
        private router: Router
    ) {
        if (!this.appDataService.isUserLoggedIn()) {
            this.router.navigate([`/login`]);
        }
    }

    ngOnInit(): void {

    }

}
