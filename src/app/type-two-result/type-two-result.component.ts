import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QnaService } from '../services/qna.service';
import { QnA } from '../model/qna.model';
import { AppDataService } from '../services/app-data.service';
import { ButtonObject } from '../model/buttonObject.model';


@Component({
    selector: 'app-type-two-result',
    templateUrl: './type-two-result.component.html',
    styleUrls: ['./type-two-result.component.css']
})
export class TypeTwoResultComponent implements OnInit {

    qna = [] as QnA[];
    selectedAnswer: string = null;

    constructor(

        private router: Router,
        private qnaService: QnaService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.qnaService.getQnA().subscribe(
            (data) => {
                this.qna = data;
            }
        );
    }
    navigateToStatus(): void {
        this.router.navigate([`/status`]);
    }
}
