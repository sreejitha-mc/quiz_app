import { Component, Input, ViewChild, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FeedbackForm } from '../model/feedbackForm.model';
import { AppDataService } from '../services/app-data.service';
import { QnA } from '../model/qna.model';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnChanges, OnInit {

  feedbackData = {} as FeedbackForm;
  @Input() id: string;
  @Input() trigger: boolean;
  @ViewChild('myModal') myModal;
  showPopup = false;
  feedback: string;


  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService
  ) {
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //     return false;
    //   };
  }

  ngOnInit(): void {
    console.log(this.appDataService.getFeedbackInfo());
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.trigger === true) {
      this.openModel();
    }

  }

  createFeedbackObject(): FeedbackForm {
    const feedbackInfo = {
      id: this.id,
      feedback: this.feedback
    };
    return feedbackInfo;
  }

  submitFeedback(): void {
    const popupformInfo = this.createFeedbackObject();
    this.appDataService.setFeedbackInfo(popupformInfo);
    this.closeModel();
  }

  private openModel(): void {
    $('#feedbackformModel').modal('show');
  }

  private closeModel(): void {
    $('#feedbackformModel').modal('hide');
  }

}
