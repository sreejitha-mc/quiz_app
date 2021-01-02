import { Component, OnInit, Input } from '@angular/core';
import { QnaService } from '../services/qna.service';
import { QnA } from '../model/qna.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { ButtonObject } from '../model/buttonObject.model';


@Component({
    selector: 'app-type-one-result',
    templateUrl: './type-one-result.component.html',
    styleUrls: ['./type-one-result.component.css']
})
export class TypeOneResultComponent implements OnInit {

    @Input() qna = {} as QnA;
    @Input() selectedAnswer: string = null;
    @Input() buttonObjArr = [] as ButtonObject[];
    message: string;
    info: string;
    isQuestion = {} as QnA;
    currentIndex: number;
    bObj = {} as ButtonObject;
    msg: boolean;

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
        this.qna.id = this.route.snapshot.paramMap.get('id');
        this.checking();


    }


    public checking(): void {
        if (this.selectedAnswer === this.qna.answer) {
            this.message = 'Right';
        }
        else {
            this.message = 'Wrong';
        }

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
                            this.info = 'No more question to display, For completing the quiz click "Finish"';
                        }
                    }
                    const nextQues = data[this.currentIndex];
                    this.qna.id = nextQues.id;
                    const navigateUrl = `/type-one-questions/${this.qna.id}`;
                    this.router.navigate([`type-one-questions`, this.qna.id]);
                } else {
                    this.msg = true;
                    this.info = 'No more question to display, For completing the quiz click "Finish"';
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

}
