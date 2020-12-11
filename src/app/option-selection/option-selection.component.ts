import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionType } from '../enum/option-type.enum';
import { QnaService } from '../services/qna.service';
import { AppDataService } from '../services/app-data.service';

@Component({
    selector: 'app-option-selection',
    templateUrl: './option-selection.component.html',
    styleUrls: ['./option-selection.component.css']
})
export class OptionSelectionComponent implements OnInit {
    selectedoption: OptionType;
    optionAnswerAfterEachQn = OptionType.ANSWER_AFTER_EACH_QN;
    optionAtEnd = OptionType.ANSWER_AT_END;

    constructor(
        private router: Router,
        private qnaService: QnaService,
        private appDataService: AppDataService
    ) { }

    ngOnInit(): void {
        console.log(this.appDataService.getUserInfo());
    }

    navigateToSlectedOption(): void {
        this.appDataService.setOptionInfo(this.selectedoption);
        this.qnaService.getQnA().subscribe(
            (data) => {

                if (data.length > 0) {
                    const id = data[0].id;
                    const navigateUrl = (this.selectedoption === OptionType.ANSWER_AFTER_EACH_QN) ? `/type-one-questions/${id}` : `/type-two-questions/${id}`;
                    this.router.navigate([navigateUrl]);

                }
            },
            (err) => {
                console.log(err);

            }
        );
    }

}
