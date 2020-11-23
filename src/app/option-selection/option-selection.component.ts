import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionType } from '../enum/option-type.enum';

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
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    navigateToSlectedOption(): void {
        const navigateUrl = (this.selectedoption === OptionType.ANSWER_AFTER_EACH_QN) ? `/type-one-questions` : `/type-two-questions`;
        this.router.navigate([navigateUrl]);
    }

}
