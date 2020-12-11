import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { ButtonObject } from '../model/buttonObject.model';
import { Button } from 'protractor';
import { QnaService } from '../services/qna.service';
import { QnA } from '../model/qna.model';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

    numberOfQuestions: number;
    numberOfQueReviewed: number;
    numberOfQueSkipped: number;
    numberOfQueAnswered: number;
    numberOfAnswerCorrect: number;
    count: number;
    buttonObjectArray = [] as ButtonObject[];
    qna = [] as QnA[];

    constructor(

        private router: Router,
        private appDataService: AppDataService,
        private qnaService: QnaService
    ) { }

    ngOnInit(): void {
        this.qnaService.getQnA().subscribe(
            (data) => {
                this.qna = data;
                this.numberOfQuestions = this.qna.length;

            }
        );
        this.buttonObjectArray = this.appDataService.getObjectArrayInfo();
        this.numberOfQueReviewed = this.questionReviewed();
        this.numberOfQueSkipped = this.questionSkipped();
        this.numberOfQueAnswered = this.questionAnswered();
        this.numberOfAnswerCorrect = this.correctAnswer();
    }


    questionReviewed(): any {
        this.count = 0;
        this.buttonObjectArray.forEach((i) => {
            if (i.status === 'reviewed') {
                this.count++;
            }
        }
        );
        return this.count;
    }

    questionSkipped(): any {
        this.count = 0;
        this.buttonObjectArray.forEach((i) => {
            if (i.status === 'skiped') {
                this.count++;
            }
        }
        );
        return this.count;
    }

    questionAnswered(): any {
        this.count = 0;
        this.buttonObjectArray.forEach((i) => {
            if (i.status === 'answered') {
                this.count++;
            }
        }
        );
        return this.count;
    }

    correctAnswer(): any {
        this.count = 0;
        this.buttonObjectArray.forEach((i) => {
            if (i.answerstatus === true) {
                this.count++;
            }
        }
        );
        return this.count;
    }

    restartQuiz(): void {
        this.appDataService.clearObjectArrayInfo();
        this.router.navigate([`/option-selection`]);
    }

}
