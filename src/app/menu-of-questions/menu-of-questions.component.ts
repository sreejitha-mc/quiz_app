import { Component, OnInit } from '@angular/core';
import { QnaService } from '../services/qna.service';
import { QnA } from '../model/qna.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { ButtonObject } from '../model/buttonObject.model';
import { OptionType } from '../enum/option-type.enum';


@Component({
    selector: 'app-menu-of-questions',
    templateUrl: './menu-of-questions.component.html',
    styleUrls: ['./menu-of-questions.component.css']
})
export class MenuOfQuestionsComponent implements OnInit {

    qna = [] as QnA[];
    id: string;
    quesnum: string;
    buttonObj = [] as ButtonObject[];
    optionType = {} as OptionType;
    isQuestion = {} as ButtonObject;
    constructor(

        private qnaService: QnaService,
        private route: ActivatedRoute,
        private router: Router,
        private appDataService: AppDataService

    ) { }

    ngOnInit(): void {
        this.optionType = this.appDataService.getOptionInfo();
        this.buttonObj = this.appDataService.getObjectArrayInfo();
        console.log(this.buttonObj);
        this.statusReturn(this.quesnum);
        this.qnaService.getQnA().subscribe(
            (data) => {
                this.qna = data;
            }
        );
    }

    navigateToQuestion(quesId): void {
        this.id = quesId;
        this.isQuestion = this.buttonObj.find((i) => i.questionNumber === this.id);
        if (this.isQuestion) {
            if (this.isQuestion.status !== 'answered') {
                if (this.optionType === OptionType.ANSWER_AFTER_EACH_QN) {
                    this.router.navigate([`type-one-questions`, this.id]);
                }
                else {
                    this.router.navigate([`type-two-questions`, this.id]);
                }
            }
        } else {
            if (this.optionType === OptionType.ANSWER_AFTER_EACH_QN) {
                this.router.navigate([`type-one-questions`, this.id]);
            }
            else {
                this.router.navigate([`type-two-questions`, this.id]);
            }
        }
    }

    statusReturn(quesnum): any {
        this.isQuestion = this.buttonObj.find((i) => i.questionNumber === quesnum);
        if (this.isQuestion) {
            switch (this.isQuestion.status) {
                case 'answered':
                    if (this.optionType === OptionType.ANSWER_AFTER_EACH_QN) {
                        if (this.isQuestion.answerstatus === true) {
                            return 'correct';
                        }
                        else {
                            return 'wrong';
                        }
                    }
                    // else if (this.optionType === OptionType.ANSWER_AT_END) {
                    //     return 'answered';
                    // }
                    else {
                        return 'answered';
                    }
                    break;
                case 'reviewed':
                    return 'reviewed';
                    break;
                case 'skiped':
                    return 'skiped';
                    break;
                default:
                    break;
            }
        } else {
            return 'unanswered';
        }
    }

}
