import { Component, OnInit } from '@angular/core';
import { QnaService } from '../services/qna.service';
import { QnA } from '../model/qna.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { ButtonObject } from '../model/buttonObject.model';

@Component({
    selector: 'app-type-two-questions',
    templateUrl: './type-two-questions.component.html',
    styleUrls: ['./type-two-questions.component.css']
})
export class TypeTwoQuestionsComponent implements OnInit {

    answer: boolean;
    id: string;
    qna = {} as QnA;
    selectedAnswer: string = null;
    correctAnswer: boolean;
    buttonObj = {} as ButtonObject;
    msg: boolean;
    message: string;
    isQuestion = {} as QnA;
    currentIndex: number;
    bObj = {} as ButtonObject;
    buttonObjArr = [] as ButtonObject[];
    questionAnswered: boolean;
    trigger: boolean;

    constructor(

        private qnaService: QnaService,
        private route: ActivatedRoute,
        private router: Router,
        private appDataService: AppDataService

    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }

    ngOnInit(): void {

        console.log(this.appDataService.getOptionInfo());
        console.log(this.appDataService.getObjectArrayInfo());
        this.id = this.route.snapshot.paramMap.get('id');
        this.fetchQna();
    }

    private fetchQna(): void {

        this.qnaService.getQnA().subscribe(
            (data) => {
                this.qna = data.find((i) => this.id === i.id
                );
            },
            (err) => {
                console.log(err);

            }
        );
    }

    navigateToReview(): void {
        this.buttonObj = this.createReviewObject();
        this.appDataService.setObjectArrayInfo(this.buttonObj);
        this.findNextQn();
    }
    findNextQn(): void {
        this.buttonObjArr = this.appDataService.getObjectArrayInfo();
        this.qnaService.getQnA().subscribe(
            (data) => {

                this.currentIndex = data.findIndex((i) => this.qna.id === i.id
                );
                this.currentIndex = this.currentIndex + 1;
                if (data[this.currentIndex]) {
                    while (!this.checkAvailability(this.currentIndex, data)) {
                        this.currentIndex = this.currentIndex + 1;
                        if (!this.qna[this.currentIndex]) {
                            this.msg = true;
                            this.message = 'No more question to display, For completing the quiz click "Finish"';
                        }
                    }
                    const nextQues = data[this.currentIndex];
                    this.qna.id = nextQues.id;
                    const navigateUrl = `/type-two-questions/${this.qna.id}`;
                    this.router.navigate([`type-two-questions`, this.qna.id]);
                } else {
                    this.msg = true;
                    this.message = 'No more question to display, For completing the quiz click "Finish"';
                }

            },
            (err) => {
                console.log(err);

            }
        );
    }

    checkAvailability(currentIndex, data): any {
        this.isQuestion = data[currentIndex];
        this.bObj = this.buttonObjArr.find((i) => i.questionNumber === this.isQuestion.id);
        if (this.bObj && this.bObj.status === 'answered') {
            return false;
        } else {
            return true;
        }
    }

    createReviewObject(): ButtonObject {
        const reviewed = {
            questionNumber: this.id,
            status: 'reviewed',
            selectedOpt: this.selectedAnswer,
            answerstatus: null
        };
        return reviewed;
    }

    navigateToSkip(): void {
        this.buttonObj = this.createSkipObject();
        this.appDataService.setObjectArrayInfo(this.buttonObj);
        this.findNextQn();
    }

    createSkipObject(): ButtonObject {
        const skiped = {
            questionNumber: this.id,
            status: 'skiped',
            selectedOpt: null,
            answerstatus: null
        };
        return skiped;
    }

    navigateToAnswer(): void {
        this.buttonObj = this.createAnswerObject();
        this.appDataService.setObjectArrayInfo(this.buttonObj);
        this.findNextQn();
        this.questionAnswered = true;
    }

    createAnswerObject(): ButtonObject {
        const answerStatus = this.checking();
        const answered = {
            questionNumber: this.id,
            status: 'answered',
            selectedOpt: this.selectedAnswer,
            answerstatus: answerStatus
        };
        return answered;

    }
    public checking(): boolean {
        if (this.selectedAnswer === this.qna.answer) {
            return true;
        }
        else {
            return false;
        }

    }

    navigateToResults(): void {
        this.router.navigate([`/type-two-result`]);
    }

    triggerEvent(): void {
        this.trigger = true;
    }

}
